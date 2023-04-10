<script lang="ts">
import { defineComponent, PropType } from "vue";
import SpriteComponent from "../sprite/sprite.comp.vue";

type Sprite = {
  name: string;
  gender: string;
  rotateY: boolean;
};

export default defineComponent({
  name: "BannerSpritesComponent",
  components: { SpriteComponent },
  props: {
    spriteLeft: {
      type: Object as PropType<Sprite>,
      required: true,
    },
    spriteRight: {
      type: Object as PropType<Sprite>,
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
        :rotate-y="spriteLeft.rotateY"
        :sprite-name="spriteLeft.name"
        :sprite-gender="spriteLeft.gender"
      />

      <SpriteComponent
        :rotate-y="spriteRight.rotateY"
        :sprite-name="spriteRight.name"
        :sprite-gender="spriteRight.gender"
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
