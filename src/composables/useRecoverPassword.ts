import type { RecoverPasswordSchema } from "core/services/schemas/password-schemas";
import { PasswordService } from "core/services/password-service";
import Helpers from "core/helpers/Helpers";
import router from "router/index";

export default async function (
  form: RecoverPasswordSchema,
  compMessage?: string
) {
  const { message, statusCode } = await PasswordService.recover(form);

  Helpers.alertWithTimer(
    statusCode === 200 ? compMessage : message,
    statusCode
  );

  setTimeout(async () => {
    if (statusCode === 200) router.push({ name: "login" });
  }, 1500);
}
