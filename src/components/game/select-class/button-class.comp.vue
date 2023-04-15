<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassButton",
  emits: ["activeClass"],
  props: {
    spriteName: { type: String, required: true },
    spriteGender: { type: String, required: true },
  },
  data() {
    return {
      spriteId: Math.random().toString(),
    };
  },
  mounted() {
    const sprite = document.getElementById(`${this.spriteId}`);

    sprite ? (sprite.style.transform = "rotateY(180deg)") : null;
  },
});
</script>

<template>
  <div>
    <img
      class="image-button-class-container"
      :id="spriteId"
      :alt="spriteName"
      :src="require(`assets/sprites/${spriteGender}/${spriteName}.png`)"
      @click="$emit('activeClass')"
    />
  </div>
</template>

<style scoped>
.image-button-class-container {
  margin: auto;
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  border-bottom: 1px solid black;
  cursor: pointer;
  transition: all 0.5s;
}
.image-button-class-container:hover {
  border-color: white;
}

@media (max-width: 780px) {
  .image-button-class-container {
    width: 2rem;
    height: 2rem;
  }
}
</style>
