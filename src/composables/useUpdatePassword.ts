import type { UpdatePasswordSchema } from "core/services/schemas/password-schemas";
import { PasswordService } from "core/services/password-service";
import AlertMessage from "core/helpers/alert-message";

export default async function (
  form: UpdatePasswordSchema,
  compMessage?: string
) {
  const { password } = form;
  const { statusCode, message } = await PasswordService.update({
    password,
  });

  AlertMessage.alertWithTimer(
    statusCode === 204 ? compMessage : message,
    statusCode
  );
}
