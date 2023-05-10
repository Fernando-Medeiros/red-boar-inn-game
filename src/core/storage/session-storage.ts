import type { SessionSchema } from "core/schemas/session-schema";

const storage = window.sessionStorage;

export class SessionStorage {
  static isAuthenticated(): boolean {
    return storage.getItem("session") ? true : false;
  }

  static get(): SessionSchema {
    const session = storage.getItem("session");
    return JSON.parse(String(session));
  }

  static set(session: SessionSchema): void {
    storage.setItem("session", JSON.stringify(session));
  }

  static remove(): void {
    storage.removeItem("session");
  }
}
