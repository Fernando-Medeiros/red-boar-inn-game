<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ label: string }>();
defineEmits(["emitContent"]);
</script>

<template>
  <div>
    <input type="checkbox" @click="$emit('emitContent')" />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 10px;
  width: max-content;
  align-items: center;
}
input {
  height: 1.2rem;
  width: 1.2rem;
}
label {
  color: var(--cor-font-color);
  font-size: 1rem;
  font-weight: 300;
}
</style>
