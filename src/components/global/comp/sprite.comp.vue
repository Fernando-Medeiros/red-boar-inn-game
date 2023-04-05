<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpriteComponent",
  props: {
    spriteName: String,
    spriteGender: String,
    rotateY: Boolean,
  },
  mounted() {
    if (this.rotateY) {
      const sprite = document.getElementById(`${this.spriteName}`);
      sprite ? (sprite.style.transform = "rotateY(180deg)") : null;
    }
  },
});
</script>

<template>
  <div class="sprite-container">
    <img
      class="sprite"
      :id="spriteName"
      :alt="spriteName"
      :src="require(`@/assets/sprites/${spriteGender}/${spriteName}.png`)"
    />
    <span class="sprite-background"></span>
  </div>
</template>

<style scoped>
.sprite-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sprite {
  z-index: 1;
  position: absolute;
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
