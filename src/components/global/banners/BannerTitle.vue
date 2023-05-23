<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <div class="main-container">
        <h1 class="title">{{ title }}</h1>
    </div>
</template>

<style scoped>
.title {
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: white;
}

@media (max-width: 780px) {
    .title {
        font-size: 24px;
        padding-bottom: 3rem;
    }
}
</style>
