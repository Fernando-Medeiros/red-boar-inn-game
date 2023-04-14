import { Session } from "core/auth/session";

export function isNotAuthenticated(requiresAuth: unknown) {
  return requiresAuth && !Session.isAuthenticated();
}

export function isAuthenticated(requiresAuth: unknown) {
  return !requiresAuth && Session.isAuthenticated();
}
