<script lang="ts">
import { defineComponent } from "vue";
import CharacterSprite from "../sprite/character.vue";

export default defineComponent({
  name: "BannerSprites",
  components: { CharacterSprite },
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
      <CharacterSprite :name="spriteLeft" :gender="'woman'" :rotate-y="true" />
      <CharacterSprite :name="spriteRight" :gender="'man'" :rotate-y="false" />
    </div>
  </div>
</template>

<style scoped>
.banner-background {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 180px;
  background-color: var(--cor-background-color);
}
.banner-container {
  display: flex;
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
