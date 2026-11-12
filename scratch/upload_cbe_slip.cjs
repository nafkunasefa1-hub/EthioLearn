const sharp = require('sharp');
const https = require('https');
const fs = require('fs');

const svgSlip = `
<svg width="720" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="cbeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#800080"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>

  <!-- Background Card -->
  <rect width="720" height="1000" fill="url(#bgGrad)" rx="24"/>
  <rect x="16" y="16" width="688" height="968" fill="#1e293b" rx="20" stroke="#334155" stroke-width="2"/>

  <!-- Header Banner -->
  <rect x="16" y="16" width="688" height="120" fill="url(#cbeGrad)" rx="20"/>
  <text x="50" y="65" fill="#ffffff" font-family="Arial, sans-serif" font-size="26" font-weight="bold">Commercial Bank of Ethiopia</text>
  <text x="50" y="100" fill="#f1f5f9" font-family="Arial, sans-serif" font-size="16">CBE Birr • Transaction Confirmation Slip</text>
  <circle cx="640" cy="75" r="24" fill="#ffffff" opacity="0.2"/>
  <text x="640" y="83" fill="#ffffff" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">✓</text>

  <!-- Success Status Icon & Title -->
  <circle cx="360" cy="210" r="42" fill="#10b981" opacity="0.15"/>
  <circle cx="360" cy="210" r="30" fill="#10b981"/>
  <text x="360" y="220" fill="#ffffff" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">✓</text>
  <text x="360" y="285" fill="#ffffff" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle">Transfer Successful</text>
  <text x="360" y="315" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15" text-anchor="middle">Payment processed to EthioLearn Admin</text>

  <!-- Amount Highlight -->
  <rect x="60" y="345" width="600" height="85" fill="#0f172a" rx="16" stroke="#10b981" stroke-width="1.5"/>
  <text x="360" y="385" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">TOTAL AMOUNT TRANSFERRED</text>
  <text x="360" y="418" fill="#10b981" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle">200.00 ETB</text>

  <!-- Divider -->
  <line x1="60" y1="460" x2="660" y2="460" stroke="#334155" stroke-dasharray="6,6"/>

  <!-- Transaction Details List -->
  <g transform="translate(60, 490)">
    <!-- Reference Number -->
    <text x="0" y="25" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Transaction Reference</text>
    <text x="600" y="25" fill="#38bdf8" font-family="Courier, monospace" font-size="16" font-weight="bold" text-anchor="end">FT26317L8924</text>

    <!-- Student Name -->
    <text x="0" y="75" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Sender / Student</text>
    <text x="600" y="75" fill="#ffffff" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">nn</text>

    <!-- Student Phone -->
    <text x="0" y="125" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Student Phone Number</text>
    <text x="600" y="125" fill="#10b981" font-family="Courier, monospace" font-size="16" font-weight="bold" text-anchor="end">+251938935404</text>

    <!-- Recipient Account -->
    <text x="0" y="175" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Beneficiary Account</text>
    <text x="600" y="175" fill="#ffffff" font-family="Courier, monospace" font-size="16" font-weight="bold" text-anchor="end">1000616679434</text>

    <!-- Recipient Name -->
    <text x="0" y="225" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Beneficiary Name</text>
    <text x="600" y="225" fill="#f59e0b" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">NAFKUN ASEFA</text>

    <!-- Plan / Purpose -->
    <text x="0" y="275" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Subscription Plan</text>
    <text x="600" y="275" fill="#a855f7" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Single Grade Access (200 ETB)</text>

    <!-- Timestamp -->
    <text x="0" y="325" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Date &amp; Time</text>
    <text x="600" y="325" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" text-anchor="end">12/11/2026, 20:47:12 EAT</text>

    <!-- Status -->
    <text x="0" y="375" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Payment Status</text>
    <text x="600" y="375" fill="#10b981" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Pending Admin Verification</text>
  </g>

  <!-- Security Footer Note -->
  <rect x="60" y="905" width="600" height="55" fill="#0f172a" rx="12"/>
  <text x="360" y="938" fill="#64748b" font-family="Arial, sans-serif" font-size="13" text-anchor="middle">Official Digital Slip • Verified by EthioLearn Academic Engine</text>
</svg>
`;

(async () => {
  const pngBuffer = await sharp(Buffer.from(svgSlip)).png().toBuffer();
  console.log('PNG generated, size:', pngBuffer.length, 'bytes');

  const meta = {
    id: 'rcpt-student-251938935404',
    user_id: 'student-251938935404',
    student_phone: '+251938935404',
    student_name: 'nn',
    amount_birr: 200,
    target_grade_id: 'grade-12-natural',
    upgrade_all_grades: false,
    receipt_filename: 'cbe_slip_nn_251938935404.png',
    status: 'pending',
    submitted_at: '2026-11-12T20:47:12.000Z'
  };

  const encodedMeta = encodeURIComponent(JSON.stringify(meta));
  const targetUrl = 'https://ntfy.sh/ethiolearn_payments_prod_2026?message=' + encodedMeta + '&filename=' + encodeURIComponent(meta.receipt_filename);

  const req = https.request(targetUrl, {
    method: 'POST',
    headers: {
      'Title': 'Payment: +251938935404 (200 ETB)',
      'Content-Type': 'image/png',
      'Content-Length': pngBuffer.length
    }
  }, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      console.log('Upload response status:', res.statusCode);
      const parsed = JSON.parse(d);
      console.log('Uploaded attachment URL:', parsed.attachment?.url);
      console.log('Attachment name:', parsed.attachment?.name);
    });
  });
  req.on('error', console.error);
  req.write(pngBuffer);
  req.end();
})();
