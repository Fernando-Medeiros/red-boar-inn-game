import type { PropsEquipment } from "core/schemas/equipment.schema";
import { LocalSession } from "core/storage/session.storage";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_EQUIPMENT: API } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class EquipmentService {
  static async create() {
    return await postMethod(API, {});
  }

  static async get() {
    return await getMethod<PropsEquipment>(API + pubId());
  }
}
