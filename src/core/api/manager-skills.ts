import type { Message } from "core/api/responses";
import type { PropsSkills } from "core/entities/skills/skills.interface";
import { LocalSession } from "core/storage/session.storage";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_SKILLS: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class ManagerSkills {
  static async create() {
    return await postMethod<Message>(URL, {}, AuthHeader());
  }

  static async get() {
    return await getMethod<Message & PropsSkills>(URL + pubId(), AuthHeader());
  }
}
