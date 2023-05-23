import type { CreateAccountSchema } from 'core/services/schemas/account-schemas'
import { AccountService } from 'core/services/account-service'
import Helpers from 'core/helpers/Helpers'
import router from 'router/index'

export default async function (form: CreateAccountSchema, compMessage?: string) {
    const { message, statusCode } = await AccountService.create(form)

    Helpers.alertWithTimer(message || compMessage, statusCode)

    setTimeout(() => {
        if (statusCode === 201) router.push({ name: 'login' })
    }, 1500)
}
