<script setup lang="ts">
defineProps<{
    title: string
    content: string[]
    image: string
}>()
</script>

<template>
    <div class="home-preview-container">
        <div class="content">
            <h2 class="title">{{ title }}</h2>
            <p v-for="paragraph in content" :key="paragraph">
                <br />
                <br />
                {{ paragraph }}
            </p>
        </div>

        <div>
            <img class="template-image" :alt="image" :src="'../resources/templates/' + image" />
        </div>
    </div>
</template>

<style scoped>
.home-preview-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-block: 10px;
    margin-block: 10px;
    color: #e8e8e8;
    height: 100%;
    justify-items: center;
    transition: all 1s;
    border-bottom: 1px solid grey;
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
    height: 35rem;
    transition: all 1s;
}

@media (max-width: 780px) {
    .home-preview-container {
        grid-template-columns: auto;
    }
    .content {
        font-size: 0.9rem;
        padding-inline: 0;
    }
    .content > p {
        display: none;
    }
}
</style>
