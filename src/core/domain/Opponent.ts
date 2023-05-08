import type { PropsStatus } from "core/schemas/status.schema";
import BattleActions from "./BattleActions";

export default class Opponent {
  name = "thief";
  level = 1;
  loot = [{}];

  points = 1;
  experience = 1;
  strength = 2;
  intelligence = 2;
  dexterity = 1;
  vitality = 1;
  health = 10;
  energy = 10;
  currentHealth = 10;
  currentEnergy = 10;

  Actions = new BattleActions(this);

  loadStatus(status: PropsStatus) {
    Object.assign(this, { ...status }, { Actions: new BattleActions(this) });
  }
  toJson(): PropsStatus {
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
