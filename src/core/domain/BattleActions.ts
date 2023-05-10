import type { StatusProps } from "./props/character/status-props";

function computedCurrentStatus(current: number, max: number, newValue: number) {
  if (current + newValue >= max) return max;
  if (current <= 0) return 0;
  return current + newValue;
}

function computedCurrentAttack(
  attack: number,
  oppDefense: number,
  oppHealth: number
): [number, number] {
  const hit = attack - oppDefense <= 0 ? 0 : attack - oppDefense;
  const damage = oppHealth - hit <= 0 ? 0 : oppHealth - hit;

  return [hit, damage];
}

export default class BattleActions {
  constructor(private props: StatusProps) {}

  executeAttackMelee(opponent: StatusProps): number {
    const [hit, damage] = computedCurrentAttack(
      this.props.strength + this.props.dexterity / 10,
      opponent.dexterity / 2,
      opponent.currentHealth
    );
    opponent.currentHealth = damage;

    return hit;
  }
  executeAttackMagic(opponent: StatusProps): number {
    const [hit, damage] = computedCurrentAttack(
      this.props.intelligence + this.props.dexterity / 10,
      opponent.dexterity / 2,
      opponent.currentHealth
    );
    opponent.currentHealth = damage;

    return hit;
  }

  restoreCurrentHealth(value: number) {
    this.props.currentHealth = computedCurrentStatus(
      this.props.currentHealth,
      this.props.health,
      value
    );
  }
  restoreCurrentEnergy(value: number) {
    this.props.currentEnergy = computedCurrentStatus(
      this.props.currentEnergy,
      this.props.energy,
      value
    );
  }
}
