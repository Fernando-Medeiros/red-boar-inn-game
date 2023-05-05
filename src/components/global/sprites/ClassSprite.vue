<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["activeClass"]);
defineProps<{ name: string; gender: string; isActive: boolean }>();
</script>

<template>
  <div>
    <img
      class="classSprite-container"
      :alt="name"
      :src="require(`assets/sprites/${gender}/${name}.svg`)"
      @click="emit('activeClass', name)"
    />
  </div>
</template>

<style scoped>
.classSprite-container {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.5s;
  transform: rotateY(180deg);
}
.classSprite-container:hover {
  filter: brightness(1.2);
  transform: rotateY(180deg) scale(1.1);
}
@media (max-width: 780px) {
  .classSprite-container {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
