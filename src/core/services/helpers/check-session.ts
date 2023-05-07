import router from "router/index";

export function CheckSession(statusCode?: number): void {
  if (statusCode === 401) router.push({ path: "/auth/logout" });
}
