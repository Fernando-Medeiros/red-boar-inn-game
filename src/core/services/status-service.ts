import type { StatusProps } from 'core/domain/props/character/status-props'
import { SessionStorage } from 'core/storage/session-storage'
import { postMethod } from './methods/post'
import { patchMethod } from './methods/patch'
import { getMethod } from './methods/get'

const { VUE_APP_API_STATUS: API } = process.env

const pubId = (): string => SessionStorage.get().pubId

export class StatusService {
    static async create() {
        return await postMethod(API, {})
    }

    static async get() {
        return await getMethod<StatusProps>(API + pubId())
    }

    static async update(form: Partial<StatusProps>) {
        return await patchMethod(API, form)
    }
}
