import type { SessionSchema } from "core/schemas/session-schema";
import { postMethod } from "./methods/post";

const {
  VUE_APP_API_AUTH_LOGIN: API_LOGIN,
  VUE_APP_API_AUTH_REFRESH: API_REFRESH,
} = process.env;

export class SessionService {
  static async login(form: object) {
    return await postMethod<SessionSchema>(API_LOGIN, form);
  }

  static async refresh(token: object) {
    return await postMethod<SessionSchema>(API_REFRESH, token);
  }
}
