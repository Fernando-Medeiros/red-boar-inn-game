import type { PropsStatus } from "core/schemas/status.schema";
import ComputedActions from "./BattleActions";

ComputedActions;

export class Opponent {
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

  Actions = new ComputedActions(this);

  loadStatus(status: PropsStatus) {
    Object.assign(this, { ...status }, { Actions: new ComputedActions(this) });
  }
  toJson(): PropsStatus {
    return { ...this };
  }
}
