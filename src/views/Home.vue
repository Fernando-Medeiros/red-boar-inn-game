<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/functions-helpers";
import SetupHome from "setup/page.home.json";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import RegisterButton from "comp/home/register-button.comp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    BannerTitle,
    BannerSprites,
    RegisterButton,
  },
  computed: {
    title() {
      return SetupHome[Helpers.translate()].title;
    },
    buttonLabel() {
      return SetupHome[Helpers.translate()].buttonLabel;
    },
  },
  data() {
    return {
      pathToRegister: "/auth/register",
    };
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

    <div class="main-container">
      <RegisterButton :path-to-register="pathToRegister" :label="buttonLabel" />
    </div>
  </div>
</template>

<style scoped></style>
