import { LocalSession } from "core/storage/session.storage";

export const authorizationHeader = () => {
  return { Authorization: `Bearer ${LocalSession.get().refresh}` };
};
