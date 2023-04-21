import type { Message, StatusCode } from "core/api/schemas/responses";
import type { CreateAccountSchema } from "./schemas/account.schemas";

import { postMethod } from "./methods/post";

const { VUE_APP_API_ACCOUNT: URL } = process.env;

export class AccountService {
  static async create(form: CreateAccountSchema) {
    return await postMethod<CreateAccountSchema, Message & StatusCode>(
      URL,
      form
    );
  }
}
