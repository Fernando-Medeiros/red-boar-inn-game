import type { PropsInventory } from "core/schemas/inventory.schema";
import { LocalSession } from "core/storage/session.storage";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_INVENTORY: API } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class InventoryService {
  static async create() {
    return await postMethod(API, {});
  }

  static async get() {
    return await getMethod<PropsInventory>(API + pubId());
  }
}
