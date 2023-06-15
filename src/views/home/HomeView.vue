<script setup lang="ts">
import Helpers from 'core/helpers/Helpers'
import SetupHome from 'setup/page.home.json'
import BannerTitle from 'comp/global/banners/BannerTitle.vue'
import BannerSprites from 'comp/global/banners/BannerSprites.vue'
import HomePreview from 'comp/home/HomePreview.vue'

const { title } = SetupHome[Helpers.translate()]
const { preview } = SetupHome[Helpers.translate()]
</script>

<template>
    <div>
        <BannerTitle :title="title" />
        <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

        <div class="main-background">
            <div class="main-container">
                <v-carousel
                    cycle
                    height="600"
                    :interval="3500"
                    :progress="'white'"
                    :show-arrows="false"
                    hide-delimiters
                >
                    <v-carousel-item v-for="view in preview" :key="view.title">
                        <v-sheet height="100%" color="transparent">
                            <div class="d-flex fill-height justify-center align-center">
                                <HomePreview
                                    :title="view.title"
                                    :content="view.content"
                                    :image="view.image"
                                />
                            </div>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>
