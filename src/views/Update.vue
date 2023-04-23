<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/functions-helpers";
import SetupUpdates from "setup/page.updates.json";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import UpdatePreview from "comp/update/update.preview.comp.vue";

export default defineComponent({
  name: "UpdateView",
  components: {
    BannerTitle,
    BannerSprites,
    UpdatePreview,
  },
  computed: {
    title() {
      return SetupUpdates[Helpers.translate()].title;
    },
    updates() {
      return SetupUpdates[Helpers.translate()].updates;
    },
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'warrior'" :sprite-right="'warrior'" />

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
</style>
