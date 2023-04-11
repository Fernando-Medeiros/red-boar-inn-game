<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassDescription",
  props: {
    description: { type: Array, required: true },
  },
});
</script>

<template>
  <div class="description-class-container">
    <p v-for="paragraph in description" :key="(paragraph as string)">
      {{ paragraph }}
    </p>
  </div>
</template>

<style scoped>
.description-class-container {
  display: grid;
  gap: 1rem;
  margin: auto;
  height: auto;
}
.description-class-container > p {
  word-spacing: 5px;
  word-break: keep-all;
}
@media (max-width: 780px) {
}
</style>
