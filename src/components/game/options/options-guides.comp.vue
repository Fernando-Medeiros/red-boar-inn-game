<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/storage/local.storage";
import SetupOptions from "setup/page.options.json";

export default defineComponent({
  name: "OptionsGuides",
  emits: ["showGuide"],
  data() {
    return {
      guides: SetupOptions[LocalStorage.getLanguage()].guides,
    };
  },
});
</script>

<template>
  <div class="guides-container">
    <button
      class="guide-button"
      v-for="guide in guides"
      :key="guide.name"
      @click="$emit('showGuide', guide.name)"
    >
      {{ guide.placeholder }}
    </button>
  </div>
</template>

<style scoped>
.guides-container {
  display: flex;
  gap: 10px;
  margin-bottom: 3rem;
}
.guide-button {
  width: 100%;
  height: 2rem;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid white;
  border-left: 2px solid white;
  border-right: 2px solid white;
  background-color: #2828284d;
  transition: all 0.5s;
  cursor: pointer;
}
.guide-button:hover {
  border-color: burlywood;
  transition: all 0.3s;
}
@media (max-width: 780px) {
}
</style>
