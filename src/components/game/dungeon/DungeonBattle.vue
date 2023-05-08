<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import type { Consumable } from "core/schemas/items.schema";
import type { BattleActionsSchema } from "core/schemas/battleActions.schema";
import { onBeforeMount, reactive } from "vue";
import { StatusService } from "core/services/status-service";
import router from "router/index";
import Character from "core/domain/Character";
import Opponent from "core/domain/Opponent";
import BattleLogs from "core/domain/BattleLogs";
import AreaInfo from "./AreaInfo.vue";
import AreaBattle from "./AreaBattle.vue";
import MenuBattle from "./MenuBattle.vue";
import MenuItems from "./MenuItems.vue";
import MenuLogs from "./MenuLogs.vue";
import MenuStatus from "./MenuStatus.vue";

onBeforeMount(async () => {
  await StatusService.get().then(({ statusCode, message, ...status }) => {
    character.loadStatus({
      ...status,
    });
  });
});

const menuOptions = reactive({
  attack: false,
  skills: false,
  inventory: false,
  status: false,
  logs: false,
  flee: false,
});

const battleInfo = reactive({ currentBattle: 1, turn: true });
const battleOpponents = reactive([]);
const logs = reactive(new BattleLogs());
const character = reactive(new Character());
const opponent = reactive(new Opponent());

function changeAction(action: BattleActionsSchema) {
  menuOptions[action] = !menuOptions[action];

  battleInfo.turn = !battleInfo.turn;

  if (action === "attack") {
    const [hitCharacter, hitOpponent] = [
      character.Actions.executeAttackMelee(opponent),
      opponent.Actions.executeAttackMelee(character),
    ];

    logs.registerBattleAction(
      action,
      { hit: hitCharacter },
      { name: opponent.name, hit: hitOpponent }
    );
  }

  if (action === "flee") confirmLeaveBattle();
}
function useItem({ type, restore }: Consumable) {
  if (type === "energy") character.Actions.restoreCurrentEnergy(restore);
  if (type === "health") character.Actions.restoreCurrentHealth(restore);

  logs.registerConsumeItem(type, restore);
}

function confirmLeaveBattle() {
  if (confirm("run away from battle without saving? "))
    router.push({ path: "/character/dungeon/" });
}
</script>

<template>
  <div class="main-background">
    <div class="main-container dungeon-battle-background">
      <AreaInfo
        :battle-info="battleInfo"
        :opponents="battleOpponents"
        :logs="logs.lastLogs()"
      />
      <AreaBattle :character="character" :opponent="opponent" />

      <MenuBattle @emit-action="changeAction" />

      <div class="main-container menu-main-container">
        <MenuItems @emit-item="useItem" v-if="menuOptions.inventory" />

        <MenuLogs :logs="logs.getLogs(-8)" v-show="menuOptions.logs" />

        <MenuStatus :status="character.toJson()" v-show="menuOptions.status" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dungeon-battle-background {
  background: linear-gradient(#81818157, #292929);
}
.menu-main-container {
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 2rem;
  border-top: 1px solid rgba(245, 245, 245, 0.356);
}
@media (max-width: 780px) {
  .menu-main-container {
    display: grid;
  }
}
</style>
