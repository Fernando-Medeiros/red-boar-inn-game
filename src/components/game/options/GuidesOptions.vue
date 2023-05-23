<script setup lang="ts">
import Helpers from 'core/helpers/Helpers'
import SetupOptions from 'setup/page.options.json'

defineProps<{ currentGuide: string }>()

const emit = defineEmits(['showGuide'])

const { guides } = SetupOptions[Helpers.translate()]
</script>

<template>
    <div class="guides-container">
        <button
            v-for="guide in guides"
            :key="guide.name"
            :class="currentGuide === guide.name ? 'activeGuide guide-button' : 'guide-button'"
            @click="emit('showGuide', guide.name)"
        >
            {{ guide.placeholder }}
        </button>
    </div>
</template>

<style scoped>
.guides-container {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
}
.guide-button {
    width: 100%;
    height: 2rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    transition: all 0.5s;
    background-color: white;
    color: black;
    cursor: pointer;
}
.guide-button:hover {
    background-color: rgb(184, 184, 184);
}
.activeGuide {
    background-color: burlywood;
}
@media (max-width: 780px) {
    .guides-container {
        gap: 5px;
    }
    .guide-button {
        width: 100%;
        height: 2rem;
        font-size: 1rem;
    }
}
</style>
