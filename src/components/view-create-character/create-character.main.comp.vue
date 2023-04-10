<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/language";
import SetupCreateCharacter from "setup/page.create-character.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import ChoiceClass from "./create-character.class.comp.vue";

export default defineComponent({
  name: "CreateCharacterMainComponent",
  components: {
    BannerTitle,
    BannerSprites,
    ChoiceClass,
  },
  data() {
    return {
      title: "",
      spriteLeft: {
        name: "thief",
        gender: "woman",
        rotateY: true,
      },
      spriteRight: {
        name: "thief",
        gender: "man",
        rotateY: false,
      },
    };
  },
  mounted() {
    const setup = SetupCreateCharacter[LocalStorage.getLanguage()];
    this.title = setup.title;
  },
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <ChoiceClass />
    </div>
  </div>
</template>

<style scoped>
.view-container {
  margin-bottom: 20px;
}

@media (max-width: 780px) {
}
</style>
