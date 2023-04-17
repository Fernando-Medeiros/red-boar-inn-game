import type { SessionSchema } from "core/schemas/session.schema";

const storage = window.sessionStorage;

export class LocalSession {
  static isAuthenticated(): boolean {
    return storage.getItem("session") ? true : false;
  }

  static get(): SessionSchema {
    const session = storage.getItem("session");
    return JSON.parse(String(session));
  }

  static set(token: string): void {
    storage.setItem("session", JSON.stringify({ token: token }));
  }

  static remove(): void {
    storage.removeItem("session");
  }
}
