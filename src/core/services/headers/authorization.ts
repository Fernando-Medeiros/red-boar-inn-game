import { SessionStorage } from 'core/storage/session-storage'

export const authorizationHeader = () => {
    return { Authorization: `Bearer ${SessionStorage.get()?.refresh}` }
}
