<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = ref(
    useDark({
        selector: 'html',
        attribute: 'color-scheme',
        valueDark: 'dark',
        valueLight: 'light'
    })
)

function toggleTheme() {
    useToggle(isDark)()
}
</script>

<template>
    <button @click="toggleTheme()">
        <img
            alt="theme"
            :src="isDark ? '../resources/icons/dark.svg' : '../resources/icons/light.svg'"
        />
    </button>
</template>

<style scoped>
button {
    padding-inline: 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;
}
img {
    width: 1.8rem;
    border-radius: 1rem;
}
button:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
}
</style>
