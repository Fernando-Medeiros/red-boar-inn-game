<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ logs: string[] }>();
</script>

<template>
  <div class="logs-container">
    <span v-for="(log, ind) in logs" :key="ind" class="logs">
      <p>{{ ind + 1 }}</p>
      <p>{{ log }}</p>
    </span>
  </div>
</template>

<style scoped>
.logs-container {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  min-width: 210px;
}
.logs {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
}
@media (max-width: 780px) {
  .logs-container {
    font-size: 14px;
  }
}
</style>
