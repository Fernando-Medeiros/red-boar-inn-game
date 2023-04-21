<script lang="ts">
import { defineComponent } from "vue";
import CharacterPreview from "comp/game/profile/character-preview.comp.vue";
import StatusOverview from "comp/game/status/status-overview.comp.vue";

export default defineComponent({
  name: "StatusView",
  components: { CharacterPreview, StatusOverview },
});
</script>

<template>
  <div class="background-game">
    <div class="main-container">
      <div class="status-container">
        <CharacterPreview />
        <StatusOverview />
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-container {
  display: grid;
  gap: 1rem;
}
@media (max-width: 780px) {
}
</style>
