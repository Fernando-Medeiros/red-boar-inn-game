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

  public static getCharacter<T = object>(): T {
    const character = storage.getItem("character");

    return JSON.parse(String(character));
  }

  public static setCharacter(data: object): void {
    storage.setItem("character", JSON.stringify(data));
  }

  public static removeCharacter(): void {
    storage.removeItem("character");
  }
}
