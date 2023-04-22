<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconStatic",
  props: {
    name: { type: String, required: true },
    label: { type: String, required: false },
  },
});
</script>

<template>
  <div class="container">
    <img class="icon" :alt="name" :src="require(`assets/icons/${name}.png`)" />

    <label :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  align-items: center;
}
.icon {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 780px) {
  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
