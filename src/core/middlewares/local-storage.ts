const localStorage = window.localStorage;

export declare type SessionSchema = { token: string };
export declare type Languages = "br" | "en";

export class LocalStorage {
  public static getLanguage(): Languages {
    const language = localStorage.getItem("language");

    return language ? (language as Languages) : "br";
  }

  public static setLanguage(language: Languages): void {
    localStorage.setItem("language", language);
  }

  public static getSession(): SessionSchema {
    const session = localStorage.getItem("session");

    return JSON.parse(String(session));
  }

  public static setSession(token: string): void {
    localStorage.setItem("session", JSON.stringify({ token: token }));
  }

  public static getCharacter<T = object>(): T {
    const character = localStorage.getItem("character");

    return JSON.parse(String(character));
  }

  public static setCharacter(data: object): void {
    localStorage.setItem("character", JSON.stringify(data));
  }
}
