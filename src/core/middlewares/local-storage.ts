import type { SessionSchema } from "core/schemas/session.schema";
import type { LanguagesSchema } from "core/schemas/language.schema";

const localStorage = window.localStorage;

export class LocalStorage {
  public static getLanguage(): LanguagesSchema {
    const language = localStorage.getItem("language");

    return language ? (language as LanguagesSchema) : "br";
  }

  public static setLanguage(language: LanguagesSchema): void {
    localStorage.setItem("language", language);
  }

  public static getSession(): SessionSchema {
    const session = localStorage.getItem("session");

    return JSON.parse(String(session));
  }

  public static setSession(token: string): void {
    localStorage.setItem("session", JSON.stringify({ token: token }));
  }

  public static removeSession(): void {
    localStorage.removeItem("session");
  }

  public static getCharacter<T = object>(): T {
    const character = localStorage.getItem("character");

    return JSON.parse(String(character));
  }

  public static setCharacter(data: object): void {
    localStorage.setItem("character", JSON.stringify(data));
  }

  public static removeCharacter(): void {
    localStorage.removeItem("character");
  }
}
