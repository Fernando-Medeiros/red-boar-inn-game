<script setup lang="ts">
import Helpers from 'core/helpers/Helpers'
import SetupUpdates from 'setup/page.updates.json'
import BannerTitle from 'comp/global/banners/BannerTitle.vue'
import BannerSprites from 'comp/global/banners/BannerSprites.vue'

const { title } = SetupUpdates[Helpers.translate()]
const { updates } = SetupUpdates[Helpers.translate()]
</script>

<template>
    <BannerTitle :title="title" />
    <BannerSprites :sprite-left="'warrior'" :sprite-right="'warrior'" />

    <div class="main-background">
        <div class="main-container">
            <v-expansion-panels :disabled="false" multiple>
                <v-expansion-panel v-for="update in updates.reverse()" :key="update.version">
                    <v-expansion-panel-title class="version">
                        <strong>v-{{ update.version }}</strong>
                        <p>{{ update.date }}</p>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                        <ul style="list-style: none">
                            <li
                                v-for="updateDescription in update.description"
                                :key="updateDescription"
                            >
                                {{ updateDescription }}
                            </li>
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<style scoped>
.version {
    display: grid;
    gap: 1rem;
    text-align: left;
    font-size: 16px;
    grid-template-columns: auto 1fr;
}
</style>
