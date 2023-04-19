import type { Message } from "core/api/responses";
import type { PropsStatus } from "core/entities/status/status.interface";
import { LocalSession } from "core/storage/session.storage";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_STATUS: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class ManagerStatus {
  static async create() {
    return await postMethod<Message>(URL, {}, AuthHeader());
  }

  static async get() {
    return await getMethod<Message & PropsStatus>(URL + pubId(), AuthHeader());
  }
}
