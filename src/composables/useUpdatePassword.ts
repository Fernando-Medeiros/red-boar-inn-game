import type { UpdatePasswordSchema } from 'core/services/schemas/password-schemas'
import { PasswordService } from 'core/services/password-service'
import Helpers from 'core/helpers/Helpers'

export default async function (form: UpdatePasswordSchema, compMessage?: string) {
    const { password } = form
    const { statusCode, message } = await PasswordService.update({
        password
    })

    Helpers.alertWithTimer(statusCode === 204 ? compMessage : message, statusCode)
}
