<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SessionStorage } from 'core/storage/session-storage'
import HeaderMain from 'comp/global/headers/HeaderMain.vue'
import HeaderGame from 'comp/global/headers/HeaderGame.vue'
import FooterMain from 'comp/global/footer/FooterMain.vue'
</script>

<template>
    <HeaderMain v-if="!SessionStorage.isAuthenticated()" />
    <HeaderGame v-else />
    <RouterView />
    <FooterMain />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Public Sans', sans-serif;
}

html {
    background-color: var(--cor-background-color);
}

input {
    border: none;
    outline: none;
    border-radius: 5px;
    border-bottom: 4px solid #d9d9d9;
    background-color: transparent;
}

:root {
    --cor-font-color: #e8e8e8;
    --cor-background-color: #222222;
    --cor-background-linear-gradient: linear-gradient(#282828, #323232c0);
}

[color-scheme='light'] {
    --cor-font-color: #222222;
    --cor-background-color: #e8e8e8;
    --cor-background-linear-gradient: linear-gradient(#81818185, #32323262);
}

[color-scheme='dark'] {
    --cor-font-color: #e8e8e8;
    --cor-background-color: #222222;
    --cor-background-linear-gradient: linear-gradient(#333333c9, #323232a9, #32323275);
}

#app {
    background-image: linear-gradient(#222222b6, #22222281, #22222275),
        url('../resources/pictures/img4.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
}

.main-container {
    max-width: 1200px;
    margin: auto;
}

.main-background {
    padding: 10px;
    padding-bottom: 2rem;
    background: linear-gradient(#81818157, #292929);
}
</style>
