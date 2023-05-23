import { SessionStorage } from 'core/storage/session-storage'

export function isNotAuthenticated(requiresAuth: unknown) {
    return requiresAuth && !SessionStorage.isAuthenticated()
}

export function isAuthenticated(requiresAuth: unknown) {
    return !requiresAuth && SessionStorage.isAuthenticated()
}
