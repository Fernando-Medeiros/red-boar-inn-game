import type {
  UpdatePasswordSchema,
  RecoverPasswordSchema,
} from "core/services/schemas/password-schemas";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";

const { VUE_APP_API_PASSWORD: API } = process.env;

export class PasswordService {
  static async recover(form: RecoverPasswordSchema) {
    return await postMethod(API, form);
  }

  static async reset(form: UpdatePasswordSchema, recoverToken: string) {
    return await patchMethod(API + recoverToken, form);
  }

  static async update(form: UpdatePasswordSchema) {
    return await patchMethod(API, form);
  }
}
