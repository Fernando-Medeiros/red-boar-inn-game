<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassGenderButton",
  emits: ["activeClassGender"],
  props: {
    spriteName: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
});
</script>

<template>
  <div>
    <img
      class="image-button-class-gender-container"
      :alt="spriteName"
      :src="require(`assets/icons/${spriteName}.png`)"
      :style="isActive ? 'filter: sepia() brightness(2)' : 'none'"
      @click="$emit('activeClassGender', spriteName)"
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
