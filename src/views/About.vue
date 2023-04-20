<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/functions-helpers";
import SetupAbout from "setup/page.about.json";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InfoComponent from "comp/about/info.comp.vue";

export default defineComponent({
  name: "AboutView",
  components: { BannerTitle, BannerSprites, InfoComponent },
  data() {
    return {
      title: SetupAbout[Helpers.getLanguage()].title,
      articles: SetupAbout[Helpers.getLanguage()].articles,
      banner: {
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
      },
    };
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites
      :sprite-left="banner.spriteLeft"
      :sprite-right="banner.spriteRight"
    />

    <div class="main-container">
      <div class="about-container">
        <InfoComponent
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :content="article.content.join('\n')"
          :credits="article?.links"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  z-index: 1;
  display: grid;
  gap: 2rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}
</style>
