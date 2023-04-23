import { LocalSession } from "core/storage/session.storage";

export const AuthHeader = () => {
  return { Authorization: `Bearer ${LocalSession.get().refresh}` };
};
