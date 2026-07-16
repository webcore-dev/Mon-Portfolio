/*
  Script d'optimisation d'images (utilise sharp)
  - Produit des WebP et des JPEG redimensionnés (srcset) pour les images listées
  - Exécution: npm install && npm run optimize-images
*/

import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), 'src', 'assets');
const outDir = assetsDir; // on écrit dans le même dossier, avec suffixe -webp ou -w{width}

const images = [
  'hero-image.jpeg',
  'about-image.jpeg',
  'eliezer-tshiabola-image.png',
  'webcore-dev-image.png',
  'house-store-image.png'
];

const widths = [480, 768, 1024];

async function processImage(filename) {
  const input = path.join(assetsDir, filename);
  const name = path.parse(filename).name;

  if (!fs.existsSync(input)) {
    console.warn('Fichier introuvable:', input);
    return;
  }

  try {
    // génère WebP
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${name}.webp`));

    // génère des versions redimensionnées
    for (const w of widths) {
      const outJpeg = path.join(outDir, `${name}-w${w}.jpg`);
      await sharp(input).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpeg);
    }

    console.log('Optimisé:', filename);
  } catch (err) {
    console.error('Erreur pour', filename, err);
  }
}

(async () => {
  for (const img of images) {
    await processImage(img);
  }
  console.log('Optimisation terminée.');
})();