import { postMethod } from './methods/post'
import { patchMethod } from './methods/patch'

const { VUE_APP_API_PASSWORD: API } = process.env

export class PasswordService {
    static async recover(form: object) {
        return await postMethod(API, form)
    }

    static async reset(form: object, recoverToken: string) {
        return await patchMethod(API + recoverToken, form)
    }

    static async update(form: object) {
        return await patchMethod(API, form)
    }
}
