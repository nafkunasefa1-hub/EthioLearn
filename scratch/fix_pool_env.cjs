const fs = require('fs');
const path = require('path');

const poolPath = path.join(__dirname, '..', 'server', 'apiKeyPool.ts');
let code = fs.readFileSync(poolPath, 'utf8');

// Replace lines 75-97 with simple line parsing
const badBlockRegex = /\/\/ Read \.env directly if process\.env hasn't loaded yet[\s\S]*?if \(process\.env\.GEMINI_API_KEY\?\.trim\(\)\)/;

const cleanBlock = `// Read .env directly if process.env hasn't loaded yet
    try {
      const envPath = path.join(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const envLines = envContent.split(/\\r?\\n/);
        for (const line of envLines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('GEMINI_API_KEY')) {
            const parts = trimmed.split('=');
            if (parts.length >= 2) {
              const val = parts.slice(1).join('=').replace(/^["']|["']$/g, '').trim();
              if (val.length > 5 && !val.includes('your_') && !val.includes('GEMINI_')) {
                if (val.includes(',')) {
                  val.split(',').forEach(k => {
                    const tk = k.trim();
                    if (tk.length > 5) rawKeySet.add(tk);
                  });
                } else {
                  rawKeySet.add(val);
                }
              }
            }
          }
        }
      }
    } catch (envReadErr) {
      // Ignore
    }

    if (process.env.GEMINI_API_KEY?.trim())`;

code = code.replace(badBlockRegex, cleanBlock);
fs.writeFileSync(poolPath, code, 'utf8');
console.log('Fixed .env parser in server/apiKeyPool.ts');
