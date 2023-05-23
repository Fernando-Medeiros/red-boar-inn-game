<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
    <img :alt="name" :src="`../resources/items/${name}.png`" />
</template>

<style scoped>
img {
    width: 2rem;
    height: 2rem;
}
</style>
