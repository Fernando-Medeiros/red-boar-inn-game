<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/language";
import SetupHome from "setup/page.home.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import RegisterButton from "./home.register-button.comp.vue";

export default defineComponent({
  name: "HomeMainComponent",
  components: {
    BannerTitle,
    BannerSprites,
    RegisterButton,
  },
  data() {
    return {
      title: "",
      pathToRegister: "/register",
      label: "",
      spriteLeft: {
        name: "mage",
        gender: "woman",
        rotateY: true,
      },
      spriteRight: {
        name: "mage",
        gender: "man",
        rotateY: false,
      },
    };
  },
  mounted() {
    const setup = SetupHome[LocalStorage.getLanguage()];
    this.title = setup.title;
    this.label = setup.buttonLabel;
  },
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <RegisterButton :path-to-register="pathToRegister" :label="label" />
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
