import type { Message, StatusCode } from "core/services/schemas/responses";
import type {
  CreateAccountSchema,
  UpdateAccountSchema,
} from "./schemas/account.schemas";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";

const { VUE_APP_API_ACCOUNT: URL } = process.env;

export class AccountService {
  static async create(form: CreateAccountSchema) {
    return await postMethod<Message & StatusCode>(URL, form);
  }

  static async update(form: UpdateAccountSchema) {
    return await patchMethod<Message & StatusCode>(URL, form, AuthHeader());
  }
}
