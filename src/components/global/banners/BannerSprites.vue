<script setup lang="ts">
import CharacterSprite from '../sprites/CharacterSprite.vue'

defineProps<{ spriteLeft: string; spriteRight: string }>()
</script>

<template>
    <span class="banner-background"></span>

    <div class="main-container">
        <div class="banner-container">
            <CharacterSprite :name="spriteLeft" :gender="'woman'" :rotate-y="true" />
            <CharacterSprite :name="spriteRight" :gender="'man'" :rotate-y="false" />
        </div>
    </div>
</template>

<style scoped>
.banner-background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 180px;
    background-color: var(--cor-background-color);
}
.banner-container {
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
}

@media (max-width: 780px) {
    .banner-background {
        height: 120px;
    }
    .banner-container {
        margin-bottom: 1.5rem;
    }
}
</style>
