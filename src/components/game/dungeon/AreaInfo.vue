<script setup lang="ts">
import { defineProps } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon-battle.json";

const setup = SetupDungeon[Helpers.translate()].areaInfo;

defineProps<{
  battleInfo: { currentBattle: number; turn: boolean };
  opponents: object[];
  logs: string[];
}>();
</script>

<template>
  <div class="area-info-container">
    <div class="info-area">
      <span>
        <p>{{ setup.opponents }}:</p>
        <p>{{ battleInfo?.currentBattle }} / {{ opponents.length }}</p>
      </span>

      <span>
        <p>{{ setup.turn }}:</p>
        <p>{{ battleInfo.turn ? "you" : "opponent" }}</p>
      </span>
    </div>

    <div class="info-logs">
      <p v-for="log in logs" :key="log">{{ log }}</p>
    </div>
  </div>
</template>

<style scoped>
.area-info-container {
  display: grid;
  padding: 10px;
  color: white;
  grid-template-columns: 0.5fr 1fr;
  border-bottom: 1px solid rgba(245, 245, 245, 0.356);
}
.info-area {
  display: grid;
  gap: 10px;
  text-align: left;
}
.info-area > span {
  display: inline-flex;
  gap: 10px;
}
.info-logs {
  display: grid;
  gap: 14px;
  justify-content: end;
}

@media (max-width: 780px) {
  .area-info-container {
    padding: 0px;
    padding-block: 10px;
    font-size: 13px;
  }
}
</style>
