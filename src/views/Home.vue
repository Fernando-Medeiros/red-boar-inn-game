<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/functions-helpers";
import SetupHome from "setup/page.home.json";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import PreviewComponent from "comp/home/preview.comp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    BannerTitle,
    BannerSprites,
    PreviewComponent,
  },
  computed: {
    title() {
      return SetupHome[Helpers.translate()].title;
    },
    previews() {
      return SetupHome[Helpers.translate()].preview;
    },
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

    <div class="background-game">
      <div class="main-container previews-container">
        <PreviewComponent
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
