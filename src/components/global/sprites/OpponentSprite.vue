<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string; level: number; rotateY: boolean }>();
</script>

<template>
  <div class="container">
    <img
      class="sprite"
      :alt="name"
      :style="rotateY ? 'transform: rotateY(180deg)' : ''"
      :src="require(`assets/opponents/${name}.svg`)"
    />

    <span class="label">
      <strong>{{ name }}</strong>
      <span>
        <p>level - {{ level }}</p>
      </span>
    </span>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 1rem;
  justify-content: center;

  align-items: center;
  margin-top: 2rem;
  margin-bottom: auto;
}
.sprite {
  z-index: 1;
  position: relative;
  width: 118px;
  height: 113.28px;
  border-radius: 11px;
}
.label {
  display: flex;
  gap: 1rem;
  text-align: center;
  color: white;
}
@media (max-width: 780px) {
  .sprite {
    width: 4rem;
    height: 4rem;
  }
  .label {
    display: grid;
    font-size: 14px;
  }
}
</style>
