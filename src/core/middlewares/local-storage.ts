const localStorage = window.localStorage;

export declare type Languages = "br" | "en";

export class LocalStorage {
  public static getLanguage(): Languages {
    return (localStorage.getItem("language") as Languages) || "br";
  }

  public static setLanguage(language: Languages): void {
    localStorage.setItem("language", language as Languages);
  }

  public static getCharacter<T = object>(): T {
    return JSON.parse(localStorage.getItem("character") as string);
  }

  public static setCharacter(data: object): void {
    localStorage.setItem("character", JSON.stringify(data));
  }
}
