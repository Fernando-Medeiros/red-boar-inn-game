import type { UpdateAccountSchema } from 'core/services/schemas/account-schemas'
import { AccountService } from 'core/services/account-service'
import Helpers from 'core/helpers/Helpers'

export default async function (form: UpdateAccountSchema, compMessage?: string) {
    const { email } = form
    const { statusCode, message } = await AccountService.update({
        email
    })

    Helpers.alertWithTimer(statusCode === 204 ? compMessage : message, statusCode)
}
