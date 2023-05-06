import type { Defensive, Offensive } from "./skill.schema";

export type PropsSkills = {
  offensive: Offensive[];
  defensive: Defensive[];
};
