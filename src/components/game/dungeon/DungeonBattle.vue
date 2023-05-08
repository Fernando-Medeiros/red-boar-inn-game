<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import type { Consumable } from "core/schemas/items.schema";
import { onBeforeMount, reactive, ref } from "vue";
import { StatusService } from "core/services/status-service";
import { Character } from "core/domain/Character";
import { Opponent } from "core/domain/Opponent";
import AreaBattle from "./AreaBattle.vue";
import MenuBattle from "./MenuBattle.vue";
import MenuItems from "./MenuItems.vue";

type Actions = "attack" | "skills" | "inventory" | "logs" | "flee" | "status";

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

const character = reactive(new Character());
const opponent = reactive(new Opponent());

function changeAction(action: Actions) {
  menuOptions[action] = !menuOptions[action];

  if (action === "attack") {
    character.Actions.executeAttackMelee(opponent);
    opponent.Actions.executeAttackMelee(character);
  }
}

function useItem({ type, restore }: Consumable) {
  if (type === "energy") character.Actions.restoreCurrentEnergy(restore);
  if (type === "health") character.Actions.restoreCurrentHealth(restore);
}
</script>

<template>
  <div class="main-background">
    <div class="main-container dungeon-battle-background">
      <AreaBattle :character="character" :opponent="opponent" />

      <MenuBattle @emit-action="changeAction" />

      <MenuItems @emit-item="useItem" v-if="menuOptions.inventory" />
    </div>
  </div>
</template>

<style scoped>
.dungeon-battle-background {
  background: linear-gradient(#81818157, #292929);
}
@media (max-width: 780px) {
}
</style>
