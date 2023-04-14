import type { SessionSchema } from "core/schemas/session.schema";
import { LocalStorage } from "core/middlewares/local-storage";

export class Session {
  static isAuthenticated(): boolean {
    return LocalStorage.getSession() ? true : false;
  }

  static getSession(): SessionSchema {
    return LocalStorage.getSession();
  }

  static setSession(token: string) {
    LocalStorage.setSession(token);
  }

  static removeSession(): void {
    LocalStorage.removeSession();
  }
}
