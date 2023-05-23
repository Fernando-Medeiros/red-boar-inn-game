import type { CharacterUpdateSchema } from 'core/services/schemas/character-schemas'
import { CharacterService } from 'core/services/character-service'
import Helpers from 'core/helpers/Helpers'

export default async function (form: CharacterUpdateSchema, compMessage?: string) {
    const { message, statusCode } = await CharacterService.update(form)

    Helpers.alertWithTimer(statusCode === 204 ? compMessage : message, statusCode)
}
