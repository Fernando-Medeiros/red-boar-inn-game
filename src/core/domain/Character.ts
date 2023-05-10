import type { StatusProps } from "./props/character/status-props";
import BattleActions from "./BattleActions";

export default class Character {
  points = 1;
  experience = 1;
  strength = 1;
  intelligence = 1;
  dexterity = 1;
  vitality = 1;
  health = 1;
  energy = 1;
  currentHealth = 1;
  currentEnergy = 1;

  Actions = new BattleActions(this);

  loadStatus(status: StatusProps) {
    Object.assign(this, { ...status }, { Actions: new BattleActions(this) });
  }
  toJson(): StatusProps {
    return {
      points: this.points,
      experience: this.experience,
      strength: this.strength,
      intelligence: this.intelligence,
      dexterity: this.dexterity,
      vitality: this.vitality,
      health: this.health,
      energy: this.energy,
      currentHealth: this.currentHealth,
      currentEnergy: this.currentEnergy,
    };
  }
}
