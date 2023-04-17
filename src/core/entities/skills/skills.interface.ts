import type { Defensive, Offensive } from "core/schemas/skills.schema";

export interface ISkills {
  get getOffensiveSkills(): Offensive[] | object[];
  set setOffensive(skill: Offensive);

  get getDefensiveSkills(): Defensive[] | object[];
  set setDefensive(skill: Defensive);

  findOffensive(name: string): Offensive | undefined;
  findDefensive(name: string): Defensive | undefined;

  toJson(): PropsSkills;
}

export type PropsSkills = {
  offensive: Offensive[];
  defensive: Defensive[];
};
