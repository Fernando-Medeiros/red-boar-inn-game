<script setup lang="ts">
import { ref } from 'vue'
import GuidesOptions from 'comp/game/options/GuidesOptions.vue'
import CharacterOptions from 'comp/game/options/CharacterOptions.vue'
import SystemOptions from 'comp/game/options/SystemOptions.vue'
import AccountOptions from 'comp/game/options/AccountOptions.vue'

const activeGuide = ref('character')
</script>

<template>
    <div class="main-background">
        <div class="main-container">
            <GuidesOptions
                :current-guide="activeGuide"
                @show-guide="(guide) => (activeGuide = guide)"
            />

            <div class="background">
                <CharacterOptions v-show="activeGuide === 'character'" />

                <AccountOptions v-show="activeGuide === 'account'" />

                <SystemOptions v-show="activeGuide === 'system'" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    padding-block: 1rem;
    background: var(--cor-background-linear-gradient), var(--cor-background-color);
}
</style>
