<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string }>();
</script>

<template>
  <span>
    <img
      class="item-sprite"
      :alt="name"
      :src="require(`assets/items/${name}.png`)"
    />
  </span>
</template>

<style scoped>
.item-sprite {
  width: 2rem;
  height: 2rem;
}
</style>
