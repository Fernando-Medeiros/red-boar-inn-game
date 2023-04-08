<script lang="ts">
import { defineComponent } from "vue";
import BannerTitle from "@/components/global/composition/banner-title.comp.vue";
import BannerSprites from "@/components/global/composition/banner-sprites.comp.vue";
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
      title: "Comece a explorar um mundo de masmorras e aventuras!",
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
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <RegisterButton />
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
