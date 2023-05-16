import BattleLogs from "./BattleLogs";
import Character from "./Character";
import Opponent from "./Opponent";
import router from "router/index";

export default class {
  public character = new Character();
  public opponent = new Opponent();
  public logs = new BattleLogs();

  changeAction(action: string) {
    if (action === "attack") this.executeAttack();
    if (action === "flee") this.executeFlee();
  }

  executeAttack() {
    const [hitCharacter, hitOpponent] = [
      this.character.Actions.executeAttackMelee(this.opponent),
      this.opponent.Actions.executeAttackMelee(this.character),
    ];

    this.logs.registerBattleAction(
      { hit: hitCharacter },
      { name: this.opponent.name, hit: hitOpponent }
    );
  }

  executeFlee() {
    if (confirm("run away from battle without saving? "))
      router.push({ name: "profile" });
  }

  useItem(type: string, restore: number) {
    if (type === "energy") this.character.Actions.restoreCurrentEnergy(restore);
    if (type === "health") this.character.Actions.restoreCurrentHealth(restore);

    this.logs.registerConsumeItem(type, restore);
  }
}
