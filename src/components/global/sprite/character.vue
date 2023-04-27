<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterSprite",
  props: {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    rotateY: { type: Boolean, required: false },
  },
});
</script>

<template>
  <div class="container">
    <img
      class="sprite"
      :alt="name"
      :style="rotateY ? 'transform: rotateY(180deg)' : ''"
      :src="require(`assets/sprites/${gender}/${name}.svg`)"
    />
    <span class="sprite-background"></span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: auto;
}
.sprite {
  z-index: 1;
  position: relative;
  width: 118px;
  height: 113.28px;
  border-radius: 11px;
}
.sprite-background {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 10rem;
  background: rgba(255, 199, 91, 0.5);
  filter: blur(25px);
}

@media (max-width: 780px) {
  .sprite {
    width: 4rem;
    height: 4rem;
  }
  .sprite-background {
    width: 3rem;
    height: 2.5rem;
  }
}
</style>
