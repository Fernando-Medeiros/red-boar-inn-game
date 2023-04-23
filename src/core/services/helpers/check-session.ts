import type { StatusCode } from "../schemas/responses";

export function CheckSession(response: StatusCode): void {
  if (response.status === 401) {
    location.assign("/auth/logout");
  }
}
