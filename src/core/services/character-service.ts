import type { PropsCharacter } from "core/schemas/character.schema";
import type {
  CharacterCreateSchema,
  CharacterUpdateSchema,
} from "./schemas/character-schemas";
import { LocalSession } from "core/storage/session.storage";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";
import { getMethod } from "./methods/get";

const { VUE_APP_API_CHARACTER: API } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class CharacterService {
  static async create(form: CharacterCreateSchema) {
    return await postMethod(API, form);
  }
  static async get() {
    return await getMethod<PropsCharacter>(API + pubId());
  }
  static async update(form: CharacterUpdateSchema) {
    return await patchMethod(API, form);
  }
}
