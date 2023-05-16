<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import type { OpponentStatusProps } from "core/domain/props/opponent/opponent-props";
import type { BattleActionsSchema } from "core/schemas/battle-actions-schema";
import type { ConsumableProps } from "core/domain/props/items/consumable-props";
import { reactive, watch, onBeforeMount } from "vue";
import { StatusService } from "core/services/status-service";
import Helpers from "core/helpers/Helpers";
import DungeonBattle from "core/domain/DungeonBattle";

import SetupDungeons from "setup/page.dungeon.json";
import OpponentDatabase from "core/database/enemies.json";

import DungeonGate from "comp/game/dungeon/DungeonGate.vue";
import AreaInfo from "comp/game/dungeon/AreaInfo.vue";
import AreaBattle from "comp/game/dungeon/AreaBattle.vue";
import MenuBattle from "comp/game/dungeon/MenuBattle.vue";
import MenuLogs from "comp/game/dungeon/MenuLogs.vue";
import MenuItems from "comp/game/dungeon/MenuItems.vue";
import MenuStatus from "comp/game/dungeon/MenuStatus.vue";

const setup = SetupDungeons[Helpers.translate()];

const dungeonInfo = reactive({ title: "", template: "" });
const dungeonOpponents = [] as OpponentStatusProps[];

onBeforeMount(async () => {
  await StatusService.get().then(({ statusCode, message, ...status }) => {
    Battle.character.loadStatus({
      ...status,
    });
  });
});

const Battle = reactive(new DungeonBattle());
const battleInfo = reactive({ currentBattle: 1, turn: true });

const menu = reactive({
  attack: false,
  skills: false,
  inventory: false,
  status: false,
  logs: false,
  flee: false,
});

function changeAction(action: BattleActionsSchema) {
  menu[action] = !menu[action];

  battleInfo.turn = !battleInfo.turn;

  Battle.changeAction(action);
}

function useItem({ type, restore }: ConsumableProps) {
  Battle.useItem(type, restore);
}

watch(dungeonInfo, () => {
  const { magic, melee } = OpponentDatabase;

  dungeonOpponents.push(...magic.values(), ...melee.values());

  Battle.opponent.loadStatus({ ...dungeonOpponents[0] });
});
</script>

<template>
  <div class="main-background">
    <div class="main-container">
      <span
        v-show="!dungeonInfo.title"
        v-for="(dungeon, ind) in setup"
        :key="ind"
        class="dungeon"
      >
        <DungeonGate
          :title="dungeon.title"
          :template="dungeon.template"
          :description="dungeon.description"
          @emit-action="
            (title, template) => Object.assign(dungeonInfo, { title, template })
          "
        />
      </span>

      <div v-show="dungeonInfo.title">
        <AreaInfo
          :dungeon-name="dungeonInfo.title"
          :dungeon-opponents="dungeonOpponents"
          :battle-info="battleInfo"
          :battle-logs="Battle.logs.getLogs(-2)"
        />

        <AreaBattle :character="Battle.character" :opponent="Battle.opponent" />

        <MenuBattle @emit-action="changeAction">
          <template v-slot:one v-if="menu.inventory">
            <MenuItems @emit-item="useItem" />
          </template>

          <template v-slot:two>
            <MenuLogs :logs="Battle.logs.getLogs(-8)" v-show="menu.logs" />
          </template>

          <template v-slot:three>
            <MenuStatus
              :status="Battle.character.toJson()"
              v-show="menu.status"
            />
          </template>
        </MenuBattle>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dungeon {
  display: grid;
  gap: 1rem;
  padding-block: 1rem;
  justify-content: center;
  border-radius: 1rem;
  background: var(--cor-background-linear-gradient),
    var(--cor-background-linear-gradient);
}
</style>
