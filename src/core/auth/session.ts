import { LocalStorage, SessionSchema } from "../middlewares/local-storage";

export class Session {
  static isAuthenticated(): boolean {
    if (LocalStorage.getSession()) return true;
    return false;
  }

  static setSession(token: string) {
    LocalStorage.setSession(token);
  }

  static getSession(): SessionSchema {
    return LocalStorage.getSession();
  }
}
