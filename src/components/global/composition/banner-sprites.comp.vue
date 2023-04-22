<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "../sprite/sprite.comp.vue";

export default defineComponent({
  name: "BannerSprites",
  components: { SpriteComponent },
  props: {
    spriteLeft: {
      type: String,
      required: true,
    },
    spriteRight: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <span class="banner-background"></span>

  <div class="main-container">
    <div class="banner-container">
      <SpriteComponent
        :rotate-y="true"
        :sprite-name="spriteLeft"
        :sprite-gender="'woman'"
      />

      <SpriteComponent
        :rotate-y="false"
        :sprite-name="spriteRight"
        :sprite-gender="'man'"
      />
    </div>
  </div>
</template>

<style scoped>
.banner-background {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 180px;
  background-color: #222222;
}
.banner-container {
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
}

@media (max-width: 780px) {
  .banner-background {
    height: 120px;
  }
  .banner-container {
    margin-bottom: 2rem;
  }
}
</style>
