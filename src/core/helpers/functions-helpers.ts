import type { LanguagesSchema } from "core/schemas/language.schema";
import { LocalStorage } from "core/storage/local.storage";

export class Helpers {
  static random(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static getLanguage(): LanguagesSchema {
    return LocalStorage.getLanguage();
  }
}
