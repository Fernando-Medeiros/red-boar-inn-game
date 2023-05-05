<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineEmits(["changeAction"]);

defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  toRoute: { type: String, default: "" },
});
</script>

<template>
  <router-link :to="toRoute" class="IconButton-link">
    <div class="container">
      <img
        class="IconButton"
        :alt="name"
        :src="require(`assets/icons/${name}.svg`)"
        @click="$emit('changeAction')"
        :style="!toRoute ? 'filter: grayscale()' : ''"
      />
      <span class="IconButton-label">
        <p :for="label">{{ label }}</p>
      </span>
    </div>
  </router-link>
</template>

<style scoped>
.IconButton-link {
  text-decoration: none;
}
.IconButton-link:hover {
  filter: brightness(1.3);
}

.container {
  display: grid;
  gap: 10px;
  min-width: 86px;
  justify-content: center;
  text-align: center;
}
.IconButton {
  width: 3rem;
  height: 3rem;
  margin: auto;
  cursor: pointer;
}
.IconButton-label {
  color: white;
}
@media (max-width: 780px) {
  .IconButton {
    width: 2rem;
    height: 2rem;
  }
  .IconButton-label {
    font-size: 14px;
  }
}
</style>
