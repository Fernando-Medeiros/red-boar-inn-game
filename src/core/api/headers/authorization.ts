import { LocalSession } from "core/storage/session.storage";

export const authHeader = () => {
  return { Authorization: `Bearer ${LocalSession.get().refresh}` };
};
