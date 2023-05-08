<script setup lang="ts">
import { defineProps } from "vue";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import OpponentSprite from "comp/global/sprites/OpponentSprite.vue";
import StatusBar from "comp/global/helpers/StatusBar.vue";

const props = defineProps<{
  character: {
    health: number;
    energy: number;
    currentHealth: number;
    currentEnergy: number;
  };
  opponent: {
    name: string;
    level: number;
    health: number;
    energy: number;
    currentHealth: number;
    currentEnergy: number;
  };
}>();
</script>

<template>
  <div class="area-battle">
    <div>
      <CharacterPreview :rotate-y="true" />

      <span class="statusBar-container">
        <StatusBar
          :type="'health'"
          :size="'medium'"
          :max-status="props.character.health"
          :current-status="props.character.currentHealth"
        />
        <StatusBar
          :type="'energy'"
          :size="'medium'"
          :max-status="props.character.energy"
          :current-status="props.character.currentEnergy"
        />
      </span>
    </div>

    <div>
      <OpponentSprite
        :name="props.opponent.name"
        :level="props.opponent.level"
        :rotate-y="false"
      />

      <span class="statusBar-container">
        <StatusBar
          :type="'health'"
          :size="'medium'"
          :max-status="props.opponent.health"
          :current-status="props.opponent.currentHealth"
        />
        <StatusBar
          :type="'energy'"
          :size="'medium'"
          :max-status="props.opponent.energy"
          :current-status="props.opponent.currentEnergy"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>
.area-battle {
  display: grid;
  gap: 10px;
  padding-block: 1rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
.statusBar-container {
  display: grid;
  justify-content: center;
  gap: 1rem;
  margin-top: 10px;
}

@media (max-width: 780px) {
}
</style>
