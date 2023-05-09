import type { PropsStatus } from "core/schemas/status.schema";
import { LocalSession } from "core/storage/session.storage";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";
import { getMethod } from "./methods/get";

const { VUE_APP_API_STATUS: API } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class StatusService {
  static async create() {
    return await postMethod(API, {});
  }

  static async get() {
    return await getMethod<PropsStatus>(API + pubId());
  }

  static async update(form: Partial<PropsStatus>) {
    return await patchMethod(API, form);
  }
}
