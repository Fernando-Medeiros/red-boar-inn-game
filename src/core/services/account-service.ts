import type {
  CreateAccountSchema,
  UpdateAccountSchema,
} from "./schemas/account-schemas";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";

const { VUE_APP_API_ACCOUNT: API } = process.env;

export class AccountService {
  static async create(form: CreateAccountSchema) {
    return await postMethod(API, form);
  }

  static async update(form: UpdateAccountSchema) {
    return await patchMethod(API, form);
  }
}
