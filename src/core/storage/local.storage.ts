import type { LanguagesSchema } from "core/schemas/language.schema";

const storage = window.localStorage;

export class LocalStorage {
  public static getLanguage(): LanguagesSchema {
    const language = storage.getItem("language");

    return language ? (language as LanguagesSchema) : "br";
  }

  public static setLanguage(language: LanguagesSchema): void {
    storage.setItem("language", language);
  }
}
