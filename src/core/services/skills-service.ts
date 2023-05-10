import type { SkillsProps } from "core/domain/props/character/skills-props";
import { SessionStorage } from "core/storage/session-storage";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_SKILLS: API } = process.env;

const pubId = (): string => SessionStorage.get().pubId;

export class SkillsService {
  static async create() {
    return await postMethod(API, {});
  }

  static async get() {
    return await getMethod<SkillsProps>(API + pubId());
  }
}
