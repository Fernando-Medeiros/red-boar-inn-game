import { LocalSession } from "core/storage/session.storage";

export function isNotAuthenticated(requiresAuth: unknown) {
  return requiresAuth && !LocalSession.isAuthenticated();
}

export function isAuthenticated(requiresAuth: unknown) {
  return !requiresAuth && LocalSession.isAuthenticated();
}
