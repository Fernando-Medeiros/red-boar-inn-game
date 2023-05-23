<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    title: string
    content: string[]
    image: string
}>()
</script>

<template>
    <div class="home-preview-container">
        <div class="content">
            <p class="title">{{ title }}</p>
            <p v-for="paragraph in content" :key="paragraph">
                <br />
                <br />
                {{ paragraph }}
            </p>
        </div>

        <div>
            <img class="template-image" :alt="image" :src="require('assets/templates/' + image)" />
        </div>
    </div>
</template>

<style scoped>
.home-preview-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-block: 10px;
    margin-block: 10px;
    margin-top: 1rem;
    color: #e8e8e8;

    justify-items: center;
    border-radius: 1rem;
    transition: all 1s;
    background: var(--cor-background-linear-gradient);
}

.title {
    font-size: 2rem;
    text-align: center;
}
.content {
    word-break: keep-all;
    padding-inline: 2rem;
}

.template-image {
    border-radius: 1.5rem;
    height: 30rem;
    transition: all 1s;
}
.template-image:hover {
    transition: all 1s;
    transform: scale(1.1);
}

@media (max-width: 780px) {
    .title {
        font-size: 1.5rem;
    }
    .content {
        font-size: 0.9rem;
        padding-inline: 5px;
    }
    .template-image {
        padding-right: 5px;
        height: 25rem;
    }
}
</style>
