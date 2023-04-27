<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassButton",
  emits: ["activeClass"],
  props: {
    spriteName: { type: String, required: true },
    spriteGender: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
});
</script>

<template>
  <div>
    <img
      class="image-button-class-container"
      :alt="spriteName"
      :src="require(`assets/sprites/${spriteGender}/${spriteName}.svg`)"
      :style="isActive ? 'border-color: white' : ''"
      @click="$emit('activeClass', spriteName)"
    />
  </div>
</template>

<style scoped>
.image-button-class-container {
  margin: auto;
  width: 3rem;
  height: 3rem;
  padding-bottom: 5px;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid #222222;
  cursor: pointer;
  transition: all 0.5s;
  transform: rotateY(180deg);
}
.image-button-class-container:hover {
  border-color: burlywood;
}
@media (max-width: 780px) {
  .image-button-class-container {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
