import type { PropsStatus } from "core/schemas/status.schema";
import ComputedActions from "./BattleActions";

export class Character {
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

  Actions = new ComputedActions(this);

  loadStatus(status: PropsStatus) {
    Object.assign(this, { ...status }, { Actions: new ComputedActions(this) });
  }
  toJson(): PropsStatus {
    return { ...this };
  }
}
