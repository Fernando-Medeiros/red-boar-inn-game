<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/language";
import SetupUpdates from "setup/page.updates.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import UpdatePreview from "comp/view-update/update.preview.comp.vue";

export default defineComponent({
  name: "UpdateView",
  components: {
    BannerTitle,
    BannerSprites,
    UpdatePreview,
  },
  data() {
    return {
      title: "",
      updates: {},
      banner: {
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
      },
    };
  },
  mounted() {
    const setup = SetupUpdates[LocalStorage.getLanguage()];
    this.title = setup.title;
    this.updates = setup.updates;
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
      <div class="updates-container">
        <UpdatePreview :updates="updates" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
