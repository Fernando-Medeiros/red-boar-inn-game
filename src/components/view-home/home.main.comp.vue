<script lang="ts">
import { defineComponent } from "vue";
import BannerTitleComponent from "@/components/global/composition/banner-title.comp.vue";
import BannerSpritesComponent from "@/components/global/composition/banner-sprites.comp.vue";
import RegisterButtonComponent from "./home.register-button.comp.vue";

export default defineComponent({
  name: "HomeMainComponent",
  components: {
    BannerTitleComponent,
    BannerSpritesComponent,
    RegisterButtonComponent,
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
    <BannerTitleComponent :title="title" />

    <BannerSpritesComponent
      :sprite-left="spriteLeft"
      :sprite-right="spriteRight"
    />

    <div class="main-container">
      <RegisterButtonComponent />
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
