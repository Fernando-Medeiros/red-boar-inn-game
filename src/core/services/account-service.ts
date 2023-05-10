import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";

const { VUE_APP_API_ACCOUNT: API } = process.env;

export class AccountService {
  static async create(form: object) {
    return await postMethod(API, form);
  }

  static async update(form: object) {
    return await patchMethod(API, form);
  }
}
