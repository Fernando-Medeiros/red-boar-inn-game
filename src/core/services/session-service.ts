import type {
  LoginSchema,
  AccessTokenSchema,
  RefreshTokenSchema,
} from "./schemas/auth.schemas";
import type { Message, StatusCode } from "core/services/schemas/responses";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";

const {
  VUE_APP_API_AUTH_LOGIN: URL_LOGIN,
  VUE_APP_API_AUTH_REFRESH: URL_REFRESH,
} = process.env;

export class SessionService {
  static async login(form: LoginSchema) {
    return await postMethod<
      LoginSchema,
      Message & StatusCode & AccessTokenSchema
    >(URL_LOGIN, form);
  }

  static async refresh(token: RefreshTokenSchema) {
    return await postMethod<
      RefreshTokenSchema,
      Message & StatusCode & RefreshTokenSchema
    >(URL_REFRESH, token, AuthHeader());
  }
}
