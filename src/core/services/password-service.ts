import type { Message, StatusCode } from "core/services/schemas/responses";
import type {
  UpdatePasswordSchema,
  RecoverPasswordSchema,
} from "core/services/schemas/password.schemas";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";

const { VUE_APP_API_PASSWORD: URL } = process.env;

export class PasswordService {
  static async recover(form: RecoverPasswordSchema) {
    return await postMethod<Message & StatusCode>(URL, form);
  }

  static async reset(form: UpdatePasswordSchema, recoverToken: string) {
    return await patchMethod<Message & StatusCode>(URL + recoverToken, form);
  }

  static async update(form: UpdatePasswordSchema) {
    return await patchMethod<Message & StatusCode>(URL, form, AuthHeader());
  }
}
