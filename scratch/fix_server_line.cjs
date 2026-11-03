const fs = require('fs');
const lines = fs.readFileSync('server.ts', 'utf8').split('\n');
lines[4215] = '          finalAssistantReply = "✅ **Build and Recompilation Successful!**\\n\\nThe entire EthioLearn application has been cleanly compiled with Vite and esbuild, and all production web assets have been synchronized into the native Android Capacitor container (android/app/src/main/assets/public).\\n\\nYour app updates are live and ready for testing or compiling into .apk!";\r';
fs.writeFileSync('server.ts', lines.join('\n'), 'utf8');
console.log('Fixed line 4216 in server.ts');
