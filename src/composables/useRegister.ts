import type { CreateAccountSchema } from "core/services/schemas/account-schemas";
import { AccountService } from "core/services/account-service";
import AlertMessage from "core/helpers/alert-message";
import router from "router/index";

export default async function (
  form: CreateAccountSchema,
  compMessage?: string
) {
  const { message, statusCode } = await AccountService.create(form);

  AlertMessage.alertWithTimer(message || compMessage, statusCode);

  setTimeout(() => {
    if (statusCode === 201) router.push({ name: "login" });
  }, 1500);
}
