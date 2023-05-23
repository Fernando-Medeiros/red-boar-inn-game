<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ name: string }>()
</script>

<template>
    <img :alt="name" :src="require(`assets/icons/${name}.svg`)" />
</template>

<style scoped>
img {
    width: 2rem;
    height: 2rem;
}
img:hover {
    filter: brightness(1.3);
}
</style>
