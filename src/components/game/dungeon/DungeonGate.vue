<script setup lang="ts">
import IconSprite from 'comp/global/sprites/IconSprite.vue'

defineProps<{ title: string; template: string; description: string[] }>()
defineEmits(['emitAction'])
</script>

<template>
    <div class="dungeon-gate-container">
        <img :src="`../resources/dungeons/${template}.webp`" :alt="template" />

        <h3>{{ title }}</h3>

        <span class="dungeon-gate-description">
            <p v-for="paragraph in description" :key="paragraph">{{ paragraph }}</p>
        </span>

        <IconSprite :name="'dungeon'" @click="$emit('emitAction', title, template)" />
    </div>
</template>

<style scoped>
.dungeon-gate-container {
    display: grid;
    gap: 10px;
    width: 500px;
    padding: 5px;
    justify-items: center;
    background-color: #e8e8e8a1;
}

.dungeon-gate-container img {
    width: 100%;
}

.dungeon-gate-description {
    display: grid;
    gap: 10px;
    width: 300px;
    border-bottom: 1px solid black;
}

@media (max-width: 780px) {
    .dungeon-gate-container {
        width: 300px;
    }
}
</style>
