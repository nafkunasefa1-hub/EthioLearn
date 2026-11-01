/**
 * Checks every Gemini API key found in .env (GEMINI_API_KEY, GEMINI_API_KEYS, GEMINI_API_KEY_n)
 * against the live Google API and reports which ones really work.
 *
 * Usage:  npm run check-keys
 */
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');
const env = {};
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"]*)"?\s*$/);
    if (m) env[m[1]] = m[2];
  }
}
const get = (k) => process.env[k] || env[k] || '';

const keys = new Set();
if (get('GEMINI_API_KEY')) keys.add(get('GEMINI_API_KEY').trim());
get('GEMINI_API_KEYS').split(/[\n,;]/).map((k) => k.trim()).filter((k) => k.length > 5).forEach((k) => keys.add(k));
for (let i = 1; i <= 50; i++) if (get(`GEMINI_API_KEY_${i}`)) keys.add(get(`GEMINI_API_KEY_${i}`).trim());

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'];

async function check(key) {
  for (const model of MODELS) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: 'Reply with the single word OK' }] }] })
    });
    const body = await res.text();
    if (res.ok) return { ok: true, model };
    if (res.status === 429) return { ok: true, model, note: 'valid but rate-limited right now' };
    if (res.status === 401 || res.status === 400 && /API key not valid/i.test(body)) {
      return { ok: false, reason: 'REJECTED by Google (invalid / expired / revoked)' };
    }
    if (res.status === 404) continue; // model name not available for this key - try the next one
    return { ok: false, reason: `HTTP ${res.status}: ${body.slice(0, 120).replace(/\s+/g, ' ')}` };
  }
  return { ok: false, reason: 'no supported model responded' };
}

(async () => {
  if (keys.size === 0) {
    console.log('No Gemini keys found. Put GEMINI_API_KEY=... in the .env file.');
    process.exit(1);
  }
  let working = 0;
  let i = 0;
  for (const key of keys) {
    i++;
    const masked = key.length > 10 ? `${key.slice(0, 6)}...${key.slice(-4)}` : '****';
    try {
      const r = await check(key);
      if (r.ok) working++;
      console.log(`Key ${i} (${masked}): ${r.ok ? 'WORKING  (' + r.model + (r.note ? ', ' + r.note : '') + ')' : 'NOT WORKING - ' + r.reason}`);
    } catch (e) {
      console.log(`Key ${i} (${masked}): could not reach Google - ${e.message}`);
    }
  }
  console.log(`\n${working} of ${keys.size} key(s) working.`);
  if (working === 0) {
    console.log('Get a fresh free key at https://aistudio.google.com/apikey and put it in .env as GEMINI_API_KEY=...');
  }
  process.exit(working > 0 ? 0 : 2);
})();
