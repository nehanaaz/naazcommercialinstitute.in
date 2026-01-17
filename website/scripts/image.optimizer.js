import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export function optimizeImages() {
  return {
    name: "sharp-image-optimizer",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const distDir = dir.pathname;
        const images = await collectImages(distDir);

        for (const file of images) {
          try {
            await optimize(file);
          } catch (err) {
            console.warn("[sharp-skip]", file, err.message);
          }
        }
      },
    },
  };
}

async function collectImages(root) {
  const entries = await fs.readdir(root, { recursive: true });

  const results = [];
  for (const entry of entries) {
    const full = path.join(root, entry);
    const stat = await fs.stat(full).catch(() => null);
    if (!stat || !stat.isFile()) continue;
    if (!/\.(jpe?g|png|webp)$/i.test(full)) continue;
    results.push(full);
  }

  return results;
}

async function optimize(file) {
  const input = await fs.readFile(file);

  const image = sharp(input, { failOnError: false });
  const meta = await image.metadata();

  if (!meta.format) {
    throw new Error("Unknown image format");
  }

  let pipeline = image.resize({
    width: 1920,
    withoutEnlargement: true,
  });

  switch (meta.format) {
    case "jpeg":
      pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
      break;
    case "png":
      pipeline = pipeline.png({ compressionLevel: 9 });
      break;
    case "webp":
      pipeline = pipeline.webp({ quality: 75 });
      break;
    default:
      throw new Error(`Unsupported format: ${meta.format}`);
  }

  const output = await pipeline.toBuffer();
  await fs.writeFile(file, output);
}
