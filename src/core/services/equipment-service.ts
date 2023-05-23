import type { EquipmentProps } from 'core/domain/props/character/equipment-props'
import { SessionStorage } from 'core/storage/session-storage'
import { postMethod } from './methods/post'
import { getMethod } from './methods/get'

const { VUE_APP_API_EQUIPMENT: API } = process.env

const pubId = (): string => SessionStorage.get().pubId

export class EquipmentService {
    static async create() {
        return await postMethod(API, {})
    }

    static async get() {
        return await getMethod<EquipmentProps>(API + pubId())
    }
}
