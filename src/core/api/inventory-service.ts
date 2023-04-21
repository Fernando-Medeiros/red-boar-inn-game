import type { Message, StatusCode } from "core/api/schemas/responses";
import type { PropsInventory } from "core/entities/inventory/inventory.interface";
import { LocalSession } from "core/storage/session.storage";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_INVENTORY: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class InventoryService {
  static async create() {
    return await postMethod<object, Message & StatusCode>(
      URL,
      {},
      AuthHeader()
    );
  }

  static async get() {
    return await getMethod<Message & StatusCode & PropsInventory>(
      URL + pubId(),
      AuthHeader()
    );
  }
}
