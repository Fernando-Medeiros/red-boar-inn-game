import type { CreateAccountSchema } from "./schemas/account.schemas";
import type { Message } from "core/api/schemas/responses";

import { postMethod } from "./methods/post";

const { VUE_APP_API_ACCOUNT: URL } = process.env;

export class AccountService {
  static async create(form: CreateAccountSchema) {
    return await postMethod<CreateAccountSchema, Message>(URL, form);
  }
}
