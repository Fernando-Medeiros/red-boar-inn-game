import type { Message } from "core/api/responses";
import type { PropsCharacter } from "core/entities/character/character.interface";
import { LocalSession } from "core/storage/session.storage";
import { AuthHeader } from "./headers/authorization";
import { postMethod } from "./methods/post";
import { getMethod } from "./methods/get";

const { VUE_APP_API_CHARACTER: URL } = process.env;

const pubId = (): string => LocalSession.get().pubId;

export class ManagerCharacter {
  static async create(form: { charName: string }) {
    return await postMethod<{ charName: string }, Message>(
      URL,
      form,
      AuthHeader()
    );
  }

  static async get() {
    return await getMethod<Message & PropsCharacter>(
      URL + pubId(),
      AuthHeader()
    );
  }
}
