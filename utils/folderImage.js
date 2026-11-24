import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

export function folderImages(folder, { alt = "Imagen" } = {}) {
  const dir = path.join(process.cwd(), "public", folder);

  return fs
    .readdirSync(dir)
    .filter((file) => EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => {
      const { width, height } = imageSize(
        fs.readFileSync(path.join(dir, file)),
      );

      return {
        src: `/${folder}/${file}`,
        width,
        height,
        alt: `${alt} ${String(index + 1).padStart(2, "0")}`,
      };
    });
}
