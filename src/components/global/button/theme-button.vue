<script lang="ts">
import { defineComponent } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});

const toggle = useToggle(isDark);

export default defineComponent({
  name: "ThemeButton",
  data() {
    return {
      isDark: isDark,
    };
  },
  methods: {
    toggleTheme() {
      toggle();
    },
  },
});
</script>

<template>
  <button class="button" @click="toggleTheme">
    <img
      :src="
        isDark
          ? require('assets/icons/dark.svg')
          : require('assets/icons/light.svg')
      "
      alt="theme"
    />
  </button>
</template>

<style scoped>
.button {
  padding-inline: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.button > img {
  width: 2rem;
  height: 2rem;
}
.button:hover {
  filter: sepia();
  transform: scale(1.2);
}

@media (max-width: 768px) {
}
</style>
