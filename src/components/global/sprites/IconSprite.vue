<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string }>();
</script>

<template>
  <span>
    <img
      class="iconSprite"
      :alt="name"
      :src="require(`assets/icons/${name}.svg`)"
    />
  </span>
</template>

<style scoped>
.iconSprite {
  width: 2rem;
  height: 2rem;
}
.iconSprite:hover {
  filter: brightness(1.3);
}
</style>
