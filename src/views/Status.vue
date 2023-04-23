<script lang="ts">
import { defineComponent } from "vue";
import CharacterPreview from "comp/game/profile/character-preview.comp.vue";
import StatusOverview from "comp/game/status/status-overview.comp.vue";
import AlertMessage from "comp/global/helpers/alert-message.comp.vue";

export default defineComponent({
  name: "StatusView",
  expose: ["alertMessage"],
  components: { AlertMessage, CharacterPreview, StatusOverview },
  data() {
    return {
      alertMessage: "",
    };
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="background-game">
    <div class="main-container">
      <div class="status-container">
        <CharacterPreview />

        <StatusOverview @emit-message="(message) => (alertMessage = message)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-container {
  display: grid;
  gap: 1rem;
}
</style>
