<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import SetupHome from "setup/page.home.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import RegisterButton from "comp/home/register-button.comp.vue";

function getSetup() {
  return SetupHome[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "HomeView",
  components: {
    BannerTitle,
    BannerSprites,
    RegisterButton,
  },
  data() {
    return {
      title: "",
      pathToRegister: "/auth/register",
      label: "",
      banner: {
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
      },
    };
  },
  mounted() {
    const { title, buttonLabel } = getSetup();
    this.title = title;
    this.label = buttonLabel;
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
      <RegisterButton :path-to-register="pathToRegister" :label="label" />
    </div>
  </div>
</template>

<style scoped></style>
