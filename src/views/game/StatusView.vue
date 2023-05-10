<script setup lang="ts">
import type { CharacterProps } from "core/domain/props/character/character-props";
import { reactive } from "vue";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import StatusOverview from "comp/game/Partials/StatusOverview.vue";

const character = reactive({} as CharacterProps);
</script>

<template>
  <div class="main-background">
    <div class="main-container">
      <div class="status-container">
        <CharacterPreview @emitCharacter="(data) => (character = data)" />

        <StatusOverview :level="character?.level" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-container {
  display: grid;
  gap: 1rem;
  background: linear-gradient(#81818157, #292929);
}
</style>
