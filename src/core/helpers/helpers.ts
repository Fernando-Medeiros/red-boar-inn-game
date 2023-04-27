import type { LanguagesSchema } from "core/schemas/language.schema";

export class Helpers {
  static random(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static translate(): LanguagesSchema {
    const language = localStorage.getItem("language");

    return language ? (language as LanguagesSchema) : "br";
  }
}
