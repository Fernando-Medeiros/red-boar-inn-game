<script setup lang="ts">
import { ref } from 'vue'
import Helpers from 'core/helpers/Helpers'
import SetupHeader from 'setup/global.header.json'
import SetupRoutes from 'setup/global.routes.json'
import ThemeButton from '../buttons/ThemeButton.vue'
import LanguageButton from '../buttons/LanguageButton.vue'

const buttons = ref(SetupHeader[Helpers.translate()])

const routes = ref(SetupRoutes[Helpers.translate()].routes)
</script>

<template>
    <header class="header-background">
        <div class="main-container">
            <nav class="header-container">
                <div class="routes">
                    <router-link to="/" style="margin: 0px">
                        <img class="logo" alt="logo" :src="'../assets/logo.svg'" />
                    </router-link>

                    <nav class="mobile-box-routes">
                        <router-link v-for="route in routes" :key="route.path" :to="route.path">
                            {{ route.name }}
                        </router-link>
                    </nav>
                </div>

                <nav class="routes">
                    <span class="utils">
                        <LanguageButton />
                        <ThemeButton />
                    </span>

                    <router-link v-for="button in buttons" :key="button.label" :to="button.path">
                        {{ button.label }}
                    </router-link>
                </nav>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header-background {
    width: 100%;
    background-color: var(--cor-background-color);
}
.header-container {
    padding-block: 10px;
    display: flex;
    justify-content: space-between;
}
.logo {
    width: 2rem;
    height: 2rem;
    filter: saturate(0.9);
}
.routes,
.utils {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-inline: 1rem;
}
.routes a {
    text-decoration: none;
    margin-inline: 1rem;
    color: var(--cor-font-color);
}
.routes a:hover {
    text-decoration: underline 2px;
    transition: all 1s;
}
.routes a.router-link-exact-active {
    text-decoration: underline 3px;
    text-decoration-color: var(--cor-font-color);
}

@media (max-width: 780px) {
    .header-container {
        padding-inline: 5px;
    }
}
@media (max-width: 480px) {
    .routes,
    .utils {
        gap: 0px;
        margin-inline: 0px;
    }
    .routes a {
        margin-inline: 0px;
        margin-left: 1rem;
    }
    .mobile-box-routes {
        display: none;
    }
}
</style>
