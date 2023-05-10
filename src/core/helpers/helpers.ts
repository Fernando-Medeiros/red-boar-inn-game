import type { LanguageSchema } from "core/schemas/language-schema";

export class Helpers {
  static random(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static translate(): LanguageSchema {
    const language = localStorage.getItem("language");

    return language ? (language as LanguageSchema) : "br";
  }
}
