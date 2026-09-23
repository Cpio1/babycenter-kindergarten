import fs from "node:fs";
import path from "node:path";

/**
 * Проверяет, существует ли файл в папке public (только на сервере).
 * Благодаря этому сайт не падает и показывает placeholder, пока фото не добавлены.
 */
export function publicFileExists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\/+/, "")));
  } catch {
    return false;
  }
}
