<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineEmits(["emitContent"]);

defineProps<{ label: string }>();
</script>

<template>
  <div class="container">
    <input class="input" type="checkbox" @click="$emit('emitContent')" />
    <label class="label" :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  width: max-content;
  align-items: center;
}
.label {
  color: var(--cor-font-color);
  font-size: 1rem;
  font-weight: 300;
}
.input {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
