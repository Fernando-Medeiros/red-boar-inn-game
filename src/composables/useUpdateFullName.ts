import type { UpdateAccountSchema } from "core/services/schemas/account-schemas";
import { AccountService } from "core/services/account-service";
import AlertMessage from "core/helpers/alert-message";

export default async function (
  form: UpdateAccountSchema,
  compMessage?: string
) {
  const { firstName, lastName } = form;
  const { message, statusCode } = await AccountService.update({
    firstName,
    lastName,
  });

  AlertMessage.alertWithTimer(
    statusCode === 204 ? compMessage : message,
    statusCode
  );
}
