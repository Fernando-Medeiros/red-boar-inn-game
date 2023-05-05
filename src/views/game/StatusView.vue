<script setup lang="ts">
import { defineExpose, ref } from "vue";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import StatusOverview from "comp/game/Partials/StatusOverview.vue";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";

const alertMessage = ref("");
defineExpose({ alertMessage });
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="main-background">
    <div class="main-container">
      <div
        class="status-container"
        style="background: linear-gradient(#81818157, #292929)"
      >
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
