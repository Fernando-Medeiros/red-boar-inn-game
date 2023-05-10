import type { CharacterUpdateSchema } from "core/services/schemas/character-schemas";
import { CharacterService } from "core/services/character-service";
import AlertMessage from "core/helpers/alert-message";

export default async function (
  form: CharacterUpdateSchema,
  compMessage?: string
) {
  const { message, statusCode } = await CharacterService.update(form);

  AlertMessage.alertWithTimer(
    statusCode === 204 ? compMessage : message,
    statusCode
  );
}
