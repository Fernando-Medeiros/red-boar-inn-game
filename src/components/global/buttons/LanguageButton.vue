<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

onBeforeMount(() => {
    currentLanguage.value = localStorage.getItem('language') || 'br'
})

const currentLanguage = ref('')
const listLanguages = ref(['br', 'en'])

function setLanguage(lang: string) {
    localStorage.setItem('language', lang)
    location.reload()
}
</script>

<template>
    <div>
        <img :src="require(`assets/icons/${currentLanguage}.svg`)" :alt="currentLanguage" />

        <span>
            <img
                v-for="lang in listLanguages"
                :key="lang"
                :alt="lang"
                :src="require(`assets/icons/${lang}.svg`)"
                @click="setLanguage(lang)"
            />
        </span>
    </div>
</template>

<style scoped>
div {
    padding-inline: 10px;
}

img {
    width: 2rem;
    border-radius: 1rem;
}

div:hover > span {
    display: grid;
    position: fixed;
}
span {
    display: none;
    background-color: var(--cor-background-color);
}
span > img:hover {
    cursor: pointer;
    filter: brightness(1.2);
}
</style>
