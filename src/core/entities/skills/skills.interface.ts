import type { Defensive, Offensive } from "core/schemas/skills.schema";

export type PropsSkills = {
  offensive: Offensive[];
  defensive: Defensive[];
};
