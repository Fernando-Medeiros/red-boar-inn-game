<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ name: string }>()
</script>

<template>
    <img :alt="name" :src="require(`assets/items/${name}.png`)" />
</template>

<style scoped>
img {
    width: 2rem;
    height: 2rem;
}
</style>
