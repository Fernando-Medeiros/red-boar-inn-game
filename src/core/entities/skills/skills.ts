import type { ISkills, PropsSkills } from "./skills.interface";
import type { Defensive, Offensive } from "../skills.interface";

export class Skills implements ISkills {
  private props: PropsSkills;

  constructor(data: PropsSkills) {
    this.props = data;
  }

  get getOffensiveSkills(): Offensive[] | object[] {
    return this.props.offensive;
  }
  set setOffensive(skill: Offensive) {
    this.props.offensive.push(skill);
  }
  get getDefensiveSkills(): Defensive[] | object[] {
    return this.props.defensive;
  }
  set setDefensive(skill: Defensive) {
    this.props.defensive.push(skill);
  }

  findOffensive(name: string): Offensive | undefined {
    return this.props.offensive?.find((skill) => skill.name === name);
  }
  findDefensive(name: string): Defensive | undefined {
    return this.props.defensive?.find((skill) => skill.name === name);
  }

  toJson(): PropsSkills {
    return this.props;
  }
}
