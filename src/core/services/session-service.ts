import type {
  LoginSchema,
  AccessTokenSchema,
  RefreshTokenSchema,
} from "./schemas/auth-schemas";
import { postMethod } from "./methods/post";

const {
  VUE_APP_API_AUTH_LOGIN: API_LOGIN,
  VUE_APP_API_AUTH_REFRESH: API_REFRESH,
} = process.env;

export class SessionService {
  static async login(form: LoginSchema) {
    return await postMethod<AccessTokenSchema>(API_LOGIN, form);
  }

  static async refresh(token: RefreshTokenSchema) {
    return await postMethod<RefreshTokenSchema>(API_REFRESH, token);
  }
}
