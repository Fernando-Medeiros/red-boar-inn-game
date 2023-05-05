<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string; label: string }>();
</script>

<template>
  <div class="container">
    <img class="icon" :alt="name" :src="require(`assets/icons/${name}.svg`)" />

    <label :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--cor-font-color);
}
.icon {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 780px) {
  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
