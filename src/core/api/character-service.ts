import type { Message, StatusCode } from "core/api/schemas/responses";
import type { PropsCharacter } from "core/entities/character/character.interface";
import type {
  CharacterCreateSchema,
  CharacterUpdateSchema,
} from "./schemas/character.schemas";
import { LocalSession } from "core/storage/session.storage";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { patchMethod } from "./methods/patch";
import { getMethod } from "./methods/get";

const { VUE_APP_API_CHARACTER: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class CharacterService {
  static async create(form: CharacterCreateSchema) {
    return await postMethod<CharacterCreateSchema, Message & StatusCode>(
      URL,
      form,
      AuthHeader()
    );
  }
  static async get() {
    return await getMethod<Message & StatusCode & PropsCharacter>(
      URL + pubId(),
      AuthHeader()
    );
  }
  static async update(form: CharacterUpdateSchema) {
    return await patchMethod<CharacterUpdateSchema, Message & StatusCode>(
      URL,
      form,
      AuthHeader()
    );
  }
}
