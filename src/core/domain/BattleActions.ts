import type { PropsStatus } from "core/schemas/status.schema";

function computedCurrentStatus(current: number, max: number, newValue: number) {
  if (current + newValue >= max) return max;
  if (current <= 0) return 0;
  return current + newValue;
}

export default class ComputedActions {
  constructor(private props: PropsStatus) {}

  executeAttackMelee(opponent: PropsStatus) {
    const attack = this.props.strength + this.props.dexterity / 10;
    const hit = attack - opponent.dexterity / 2;

    opponent.currentHealth =
      opponent.currentHealth - hit <= 0 ? 0 : opponent.currentHealth - hit;
  }
  executeAttackMagic(opponent: PropsStatus) {
    const attack = this.props.intelligence + this.props.dexterity / 10;
    const hit = attack - opponent.dexterity / 2;

    opponent.currentHealth =
      opponent.currentHealth - hit <= 0 ? 0 : opponent.currentHealth - hit;
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
