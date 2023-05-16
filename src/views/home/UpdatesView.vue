<script setup lang="ts">
import Helpers from "core/helpers/Helpers";
import SetupUpdates from "setup/page.updates.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import UpdatePreview from "comp/home/UpdatePreview.vue";

const { title } = SetupUpdates[Helpers.translate()];
const { updates } = SetupUpdates[Helpers.translate()];
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'warrior'" :sprite-right="'warrior'" />

    <div class="main-background">
      <div class="main-container">
        <div class="updates-container">
          <UpdatePreview :updates="updates.reverse()" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.updates-container {
  z-index: 1;
  display: grid;
  gap: 20px;
  margin-top: 1rem;
  padding: 20px 10px;
  justify-items: center;
  background-color: var(--cor-background-color);
}
</style>
