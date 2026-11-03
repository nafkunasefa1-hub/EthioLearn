const fs = require('fs');
const path = require('path');

const poolPath = path.join(__dirname, '..', 'server', 'apiKeyPool.ts');
let code = fs.readFileSync(poolPath, 'utf8');

// Add dotenv at top
if (!code.includes("import dotenv from 'dotenv';")) {
  code = `import dotenv from 'dotenv';\ndotenv.config();\nimport fs from 'fs';\nimport path from 'path';\n` + code;
}

// Add direct .env file reading if rawKeySet.size === 0
const target = `    if (process.env.GEMINI_API_KEY?.trim()) {
      rawKeySet.add(process.env.GEMINI_API_KEY.trim());
    }`;

const replacement = `    // Read .env directly if process.env hasn't loaded yet
    try {
      const envPath = path.join(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const matches = envContent.matchAll(/GEMINI_API_KEY(?:_\\d+)?\\s*=\\s*["']?([^"'\r\n]+)["']?/g);
        for (const m of matches) {
          const k = m[1]?.trim();
          if (k && k.length > 5 && !k.includes('your_') && !k.includes('GEMINI_')) {
            rawKeySet.add(k);
          }
        }
        const keysMatch = envContent.match(/GEMINI_API_KEYS\\s*=\\s*["']?([^"'\r\n]+)["']?/);
        if (keysMatch && keysMatch[1]) {
          keysMatch[1].split(/[,;]/).forEach(k => {
            const trimmed = k.trim();
            if (trimmed.length > 5) rawKeySet.add(trimmed);
          });
        }
      }
    } catch (envReadErr) {
      // Ignore
    }

    if (process.env.GEMINI_API_KEY?.trim()) {
      rawKeySet.add(process.env.GEMINI_API_KEY.trim());
    }`;

code = code.replace(target, replacement);

fs.writeFileSync(poolPath, code, 'utf8');
console.log('Successfully updated server/apiKeyPool.ts to directly read .env fallback!');
