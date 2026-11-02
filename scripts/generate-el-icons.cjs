const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Define SVG templates for EL logo
// Square with rounded corners (for squircle / standard launcher)
const createSquareSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="48%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.3" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#042f2e" flood-opacity="0.45" />
    </filter>
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#bgGrad)" filter="url(#shadow)" />
  <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#borderGrad)" stroke-width="8" />

  <!-- Inner Subtle Ambient Accent -->
  <circle cx="120" cy="120" r="140" fill="#34d399" opacity="0.18" />
  <circle cx="392" cy="392" r="160" fill="#6366f1" opacity="0.15" />

  <!-- EL Bold Typography -->
  <text 
    x="256" 
    y="336" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Montserrat', 'Helvetica Neue', Arial, sans-serif" 
    font-size="240" 
    font-weight="900" 
    letter-spacing="-10" 
    text-anchor="middle" 
    fill="#ffffff"
    filter="url(#textGlow)">EL</text>
</svg>
`;

// Round version (for ic_launcher_round.png)
const createRoundSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="48%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.3" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#042f2e" flood-opacity="0.45" />
    </filter>
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Round Base -->
  <circle cx="256" cy="256" r="240" fill="url(#bgGrad)" filter="url(#shadow)" />
  <circle cx="256" cy="256" r="240" fill="none" stroke="url(#borderGrad)" stroke-width="8" />

  <!-- Inner Ambient Accents -->
  <circle cx="140" cy="140" r="130" fill="#34d399" opacity="0.18" />
  <circle cx="372" cy="372" r="140" fill="#6366f1" opacity="0.15" />

  <!-- EL Bold Typography -->
  <text 
    x="256" 
    y="336" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Montserrat', 'Helvetica Neue', Arial, sans-serif" 
    font-size="240" 
    font-weight="900" 
    letter-spacing="-10" 
    text-anchor="middle" 
    fill="#ffffff"
    filter="url(#textGlow)">EL</text>
</svg>
`;

// Adaptive Foreground version (with 66% safe zone centering to avoid cropping by Android launchers)
const createForegroundSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="48%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.4" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#021c17" flood-opacity="0.4" />
    </filter>
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Foreground emblem centered inside safe zone (312x312 inside 512x512 canvas) -->
  <rect x="100" y="100" width="312" height="312" rx="72" fill="url(#bgGrad)" filter="url(#shadow)" />
  <rect x="100" y="100" width="312" height="312" rx="72" fill="none" stroke="url(#borderGrad)" stroke-width="5" />

  <!-- Accent glow -->
  <circle cx="168" cy="168" r="80" fill="#34d399" opacity="0.2" />

  <!-- EL text centered -->
  <text 
    x="256" 
    y="308" 
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Montserrat', 'Helvetica Neue', Arial, sans-serif" 
    font-size="160" 
    font-weight="900" 
    letter-spacing="-6" 
    text-anchor="middle" 
    fill="#ffffff"
    filter="url(#textGlow)">EL</text>
</svg>
`;

async function generateAll() {
  console.log('🎨 Generating authentic EL logo assets for Android & Web...');

  const root = path.resolve(__dirname, '..');

  // Mipmap configurations
  const mipmaps = [
    { dir: 'mipmap-mdpi', launcher: 48, foreground: 108 },
    { dir: 'mipmap-hdpi', launcher: 72, foreground: 162 },
    { dir: 'mipmap-xhdpi', launcher: 96, foreground: 216 },
    { dir: 'mipmap-xxhdpi', launcher: 144, foreground: 324 },
    { dir: 'mipmap-xxxhdpi', launcher: 192, foreground: 432 },
  ];

  for (const m of mipmaps) {
    const targetDir = path.join(root, 'android/app/src/main/res', m.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 1. ic_launcher.png
    const squareBuffer = Buffer.from(createSquareSvg(m.launcher));
    await sharp(squareBuffer).png().toFile(path.join(targetDir, 'ic_launcher.png'));

    // 2. ic_launcher_round.png
    const roundBuffer = Buffer.from(createRoundSvg(m.launcher));
    await sharp(roundBuffer).png().toFile(path.join(targetDir, 'ic_launcher_round.png'));

    // 3. ic_launcher_foreground.png
    const fgBuffer = Buffer.from(createForegroundSvg(m.foreground));
    await sharp(fgBuffer).png().toFile(path.join(targetDir, 'ic_launcher_foreground.png'));

    console.log(`✓ Generated ${m.dir} icons (launcher: ${m.launcher}px, fg: ${m.foreground}px)`);
  }

  // Also update public/ web assets and PWA icons
  const publicDir = path.join(root, 'public');
  if (fs.existsSync(publicDir)) {
    // 1. icon.svg
    fs.writeFileSync(path.join(publicDir, 'icon.svg'), createSquareSvg(512), 'utf8');

    // 2. pwa-192x192.png
    await sharp(Buffer.from(createSquareSvg(192))).png().toFile(path.join(publicDir, 'pwa-192x192.png'));

    // 3. pwa-512x512.png
    await sharp(Buffer.from(createSquareSvg(512))).png().toFile(path.join(publicDir, 'pwa-512x512.png'));

    // 4. pwa-maskable-512x512.png
    await sharp(Buffer.from(createSquareSvg(512))).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

    // 5. apple-touch-icon.png
    await sharp(Buffer.from(createSquareSvg(180))).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('✓ Generated public PWA & Web icons (icon.svg, pwa-192, pwa-512, apple-touch-icon)');
  }

  console.log('✨ All EL logo icons generated successfully!');
}

generateAll().catch(err => {
  console.error('Failed to generate icons:', err);
  process.exit(1);
});
