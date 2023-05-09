import type { PropsSkills } from "core/schemas/skills.schema";
import { LocalSession } from "core/storage/session.storage";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_SKILLS: API } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class SkillsService {
  static async create() {
    return await postMethod(API, {});
  }

  static async get() {
    return await getMethod<PropsSkills>(API + pubId());
  }
}
