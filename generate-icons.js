import sharp from 'sharp';
import fs from 'fs';

async function generateIcons() {
  const svgBuffer = fs.readFileSync('./public/icon.svg');
  
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('./public/pwa-192x192.png');
    
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('./public/pwa-512x512.png');

  // Maskable icon with padding
  await sharp(svgBuffer)
    .resize(512, 512)
    .extend({
      top: 50, bottom: 50, left: 50, right: 50,
      background: { r: 79, g: 70, b: 229, alpha: 1 }
    })
    .resize(512, 512)
    .png()
    .toFile('./public/pwa-maskable-512x512.png');

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./public/apple-touch-icon.png');
    
  console.log('Icons generated successfully.');
}

generateIcons().catch(console.error);
