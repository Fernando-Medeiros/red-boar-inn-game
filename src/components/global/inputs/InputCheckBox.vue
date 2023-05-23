<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ label: string }>();
defineEmits(["emitContent"]);
</script>

<template>
  <div class="input-checkbox-container">
    <input type="checkbox" @click="$emit('emitContent')" />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.input-checkbox-container {
  display: flex;
  gap: 10px;
  width: max-content;
  align-items: center;
}
.input-checkbox-container input {
  height: 1.2rem;
  width: 1.2rem;
}
.input-checkbox-container label {
  color: var(--cor-font-color);
  font-size: 1rem;
  font-weight: 300;
}
</style>
