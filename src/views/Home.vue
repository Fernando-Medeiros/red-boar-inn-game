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
  data() {
    return {
      title: "",
      label: "",
      pathToRegister: "/auth/register",
    };
  },
  mounted() {
    const { title, buttonLabel } = SetupHome[Helpers.getLanguage()];
    this.title = title;
    this.label = buttonLabel;
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'mage'" :sprite-right="'mage'" />

    <div class="main-container">
      <RegisterButton :path-to-register="pathToRegister" :label="label" />
    </div>
  </div>
</template>

<style scoped></style>
