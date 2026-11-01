const { execSync } = require('child_process');
try {
  const out = execSync('powershell "Get-Process -Name node | Select-Object Id,ProcessName,StartTime,CPU"', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error(e.message);
}
