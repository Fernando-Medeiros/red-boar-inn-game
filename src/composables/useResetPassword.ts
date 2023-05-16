import type { UpdatePasswordSchema } from "core/services/schemas/password-schemas";
import { PasswordService } from "core/services/password-service";
import Helpers from "core/helpers/Helpers";
import router from "router/index";

export default async function (
  form: UpdatePasswordSchema,
  token?: string,
  compMessage?: string
) {
  const { message, statusCode } = await PasswordService.reset(
    form,
    String(token)
  );

  Helpers.alertWithTimer(
    statusCode === 204 ? compMessage : message,
    statusCode
  );

  setTimeout(async () => {
    if (statusCode === 204) router.push({ name: "login" });
  }, 1500);
}
