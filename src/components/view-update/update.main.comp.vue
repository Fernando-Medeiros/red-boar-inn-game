<script lang="ts">
import { defineComponent } from "vue";
import BannerTitle from "@/components/global/composition/banner-title.comp.vue";
import BannerSprites from "@/components/global/composition/banner-sprites.comp.vue";
import UpdatePreview from "./update.preview.comp.vue";

export default defineComponent({
  name: "UpdateMainComponent",
  components: {
    BannerTitle,
    BannerSprites,
    UpdatePreview,
  },
  data() {
    return {
      title: "Atualizações",
      spriteLeft: {
        name: "warrior",
        gender: "woman",
        rotateY: true,
      },
      spriteRight: {
        name: "warrior",
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
      <div class="updates-container">
        <UpdatePreview />
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  margin-bottom: 20px;
}
.updates-container {
  z-index: 1;
  display: grid;
  gap: 20px;
  padding: 20px 10px;
  justify-items: center;
  background: linear-gradient(#282828, #323232c0);
}

@media (max-width: 780px) {
}
</style>
