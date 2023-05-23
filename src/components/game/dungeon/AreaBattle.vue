<script setup lang="ts">
import CharacterPreview from 'comp/game/Partials/CharacterPreview.vue'
import OpponentSprite from 'comp/global/sprites/OpponentSprite.vue'
import StatusBar from 'comp/global/helpers/StatusBar.vue'

defineProps<{
    character: {
        health: number
        energy: number
        currentHealth: number
        currentEnergy: number
    }
    opponent: {
        name: string
        level: number
        health: number
        energy: number
        currentHealth: number
        currentEnergy: number
    }
}>()
</script>

<template>
    <div class="area-battle">
        <div>
            <CharacterPreview :rotate-y="true" />

            <span class="statusBar-container">
                <StatusBar
                    :type="'health'"
                    :size="'medium'"
                    :max-status="character.health"
                    :current-status="character.currentHealth"
                />
                <StatusBar
                    :type="'energy'"
                    :size="'medium'"
                    :max-status="character.energy"
                    :current-status="character.currentEnergy"
                />
            </span>
        </div>

        <div>
            <OpponentSprite :name="opponent.name" :level="opponent.level" :rotate-y="false" />

            <span class="statusBar-container">
                <StatusBar
                    :type="'health'"
                    :size="'medium'"
                    :max-status="opponent.health"
                    :current-status="opponent.currentHealth"
                />
                <StatusBar
                    :type="'energy'"
                    :size="'medium'"
                    :max-status="opponent.energy"
                    :current-status="opponent.currentEnergy"
                />
            </span>
        </div>
    </div>
</template>

<style scoped>
.area-battle {
    display: grid;
    gap: 10px;
    padding-block: 1rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
}
.statusBar-container {
    display: grid;
    justify-content: center;
    gap: 1rem;
    margin-top: 10px;
}

@media (max-width: 780px) {
}
</style>
