import type { CharacterProps } from "core/domain/props/character/character-props";
import { SessionStorage } from "core/storage/session-storage";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";
import { getMethod } from "./methods/get";

const { VUE_APP_API_CHARACTER: API } = process.env;

const pubId = (): string => SessionStorage.get().pubId;

export class CharacterService {
  static async create(form: object) {
    return await postMethod(API, form);
  }
  static async get() {
    return await getMethod<CharacterProps>(API + pubId());
  }
  static async update(form: object) {
    return await patchMethod(API, form);
  }
}
