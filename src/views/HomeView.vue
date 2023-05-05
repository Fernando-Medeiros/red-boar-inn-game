<script setup lang="ts">
import { ref } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupHome from "setup/page.home.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import GamePreview from "comp/home/game-preview.vue";

const title = ref(SetupHome[Helpers.translate()].title);

const previews = ref(SetupHome[Helpers.translate()].preview);
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

    <div class="main-background">
      <div class="main-container previews-container">
        <GamePreview
          v-for="preview in previews"
          :key="preview.title"
          :title="preview.title"
          :content="preview.content"
          :image="preview.image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.previews-container {
  display: grid;
}
</style>
