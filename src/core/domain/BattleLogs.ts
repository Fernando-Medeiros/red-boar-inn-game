import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon-battle.json";

const { attack, defense } = SetupDungeon[Helpers.translate()].logs;

export default class BattleLogs {
  private logs = ["o_o"];

  registerConsumeItem(type: string, restore: number) {
    this.logs.push(`${type} +${restore}`);
  }

  registerBattleAction(
    character: { hit: number },
    opponent: { name: string; hit: number }
  ) {
    this.logs.push(
      `
      ${attack} ${character.hit.toFixed(1)}! || 

      ${opponent.name} ${defense} ${opponent.hit.toFixed(1)}!
      `
    );
  }

  clear(): void {
    this.logs = [""];
  }
  lastLogs(): string[] {
    return this.logs.slice(-2);
  }
  getLogs(limit?: number): string[] {
    return this.logs.slice(limit || 1);
  }
}
