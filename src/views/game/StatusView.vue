<script setup lang="ts">
import { ref } from 'vue'
import CharacterPreview from 'comp/game/Partials/CharacterPreview.vue'
import StatusOverview from 'comp/game/Partials/StatusOverview.vue'

const character = ref()
</script>

<template>
    <div class="main-background">
        <div class="main-container">
            <div class="status-container">
                <CharacterPreview ref="character" />
                <StatusOverview :level="character?.value?.level" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.status-container {
    display: grid;
    gap: 1rem;
    background: linear-gradient(#81818157, #292929);
}
</style>
