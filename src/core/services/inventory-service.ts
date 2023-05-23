import type { InventoryProps } from 'core/domain/props/character/inventory-props'
import { SessionStorage } from 'core/storage/session-storage'
import { postMethod } from './methods/post'
import { getMethod } from './methods/get'

const { VITE_API_INVENTORY: API } = import.meta.env

const pubId = (): string => SessionStorage.get().pubId

export class InventoryService {
    static async create() {
        return await postMethod(API, {})
    }

    static async get() {
        return await getMethod<InventoryProps>(API + pubId())
    }
}
