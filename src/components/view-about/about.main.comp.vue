<script lang="ts">
import { defineComponent } from "vue";
import BannerTitle from "@/components/global/composition/banner-title.comp.vue";
import BannerSprites from "@/components/global/composition/banner-sprites.comp.vue";
import InfoComponent from "./about.info.comp.vue";

import { articles as AboutSetupArticles } from "@/../setup/utils.json";

export default defineComponent({
  name: "AboutMainComponent",
  components: { BannerTitle, BannerSprites, InfoComponent },
  data() {
    return {
      title: "Red Boar Inn",
      articles: AboutSetupArticles,
      spriteLeft: {
        name: "merchant",
        gender: "woman",
        rotateY: true,
      },
      spriteRight: {
        name: "merchant",
        gender: "man",
        rotateY: false,
      },
    };
  },
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <div class="about-container">
        <InfoComponent
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :content="article.content.join('\n')"
          :credits="article.links"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  margin-bottom: 20px;
}
.about-container {
  z-index: 1;
  display: grid;
  gap: 2rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}

@media (max-width: 780px) {
}
</style>
