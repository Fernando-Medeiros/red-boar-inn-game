<script setup lang="ts">
import Helpers from "core/helpers/Helpers";
import SetupHome from "setup/page.home.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import HomePreview from "comp/home/HomePreview.vue";

const { title } = SetupHome[Helpers.translate()];
const { preview } = SetupHome[Helpers.translate()];
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

    <div class="main-background">
      <div class="main-container previews-container">
        <HomePreview
          v-for="view in preview"
          :key="view.title"
          :title="view.title"
          :content="view.content"
          :image="view.image"
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
