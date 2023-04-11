<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassGenderButton",
  emits: ["activeClassGender"],
  props: {
    spriteName: { type: String, required: true },
  },
  data() {
    return {
      spriteId: Math.random().toString(),
    };
  },
});
</script>

<template>
  <div>
    <img
      class="image-button-class-gender-container"
      :id="spriteId"
      :alt="spriteName"
      :src="require(`assets/icons/${spriteName}.png`)"
      @click="$emit('activeClassGender')"
    />
  </div>
</template>

<style scoped>
.image-button-class-gender-container {
  margin: auto;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 0.5s;
  filter: sepia();
}
.image-button-class-gender-container:hover {
  filter: sepia() brightness(2);
}
@media (max-width: 780px) {
  .image-button-class-gender-container {
    width: 2rem;
    height: 2rem;
  }
}
</style>
