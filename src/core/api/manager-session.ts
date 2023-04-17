import type {
  LoginSchema,
  AccessTokenSchema,
  RefreshTokenSchema,
} from "./schemas/auth.schemas";
import type { Message } from "core/api/responses";

import { authHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";

const {
  VUE_APP_API_AUTH_LOGIN: URL_LOGIN,
  VUE_APP_API_AUTH_REFRESH: URL_REFRESH,
} = process.env;

export class ManagerSession {
  static async login(form: LoginSchema) {
    return await postMethod<LoginSchema, Message & AccessTokenSchema>(
      URL_LOGIN,
      form
    );
  }

  static async refresh(token: RefreshTokenSchema) {
    return await postMethod<RefreshTokenSchema, Message & RefreshTokenSchema>(
      URL_REFRESH,
      token,
      authHeader()
    );
  }
}
