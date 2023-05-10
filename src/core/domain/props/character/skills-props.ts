import type { DefensiveSkillProps } from "../skills/defensive-props";
import type { OffensiveSkillProps } from "../skills/offensive-props";

export type SkillsProps = {
  offensive: OffensiveSkillProps[];
  defensive: DefensiveSkillProps[];
};
