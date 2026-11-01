const fs = require('fs');
let content = fs.readFileSync('src/pages/MyAccountPage.tsx', 'utf-8');
content = content.replace(
  /const res = await fetch\('\/api\/students\/me', {[\s\S]*?body: JSON\.stringify\(\{ userId: user\.id \}\)\n      \}\);/,
  `const res = await fetch('/api/students/me', {\n        method: 'DELETE',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-user-id': user.id\n        },\n        body: JSON.stringify({ userId: user.id })\n      });\n\n      if (!res.ok) {\n        const data = await res.json().catch(() => ({}));\n        throw new Error(data.error || 'Failed to delete account on server');\n      }`
);
fs.writeFileSync('src/pages/MyAccountPage.tsx', content);
