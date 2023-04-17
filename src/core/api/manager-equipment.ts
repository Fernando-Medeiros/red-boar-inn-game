import type { Message } from "core/api/responses";
import type { PropsEquipment } from "core/entities/equipment/equipment.interface";
import { LocalSession } from "core/storage/session.storage";
import { authHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_EQUIPMENT: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class ManagerEquipment {
  static async create() {
    return await postMethod<Message>(URL, {}, authHeader());
  }

  static async get() {
    return await getMethod<Message & PropsEquipment>(
      URL + pubId(),
      authHeader()
    );
  }
}
