<script setup lang="ts">
import Helpers from "core/helpers/Helpers";
import SetupOptions from "setup/page.options.json";
import ThemeButton from "comp/global/buttons/ThemeButton.vue";
import LanguageButton from "comp/global/buttons/LanguageButton.vue";

const { system } = SetupOptions[Helpers.translate()];
</script>

<template>
  <div class="system-container">
    <div class="system-option">
      <p>{{ system.language.label }}</p>
      <LanguageButton />
    </div>

    <div class="system-option">
      <p>{{ system.theme.label }}</p>
      <ThemeButton />
    </div>
  </div>
</template>

<style scoped>
.system-container {
  display: grid;
  color: var(--cor-font-color);
  grid-template-columns: 1fr 1fr;
}
.system-option {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}

@media (max-width: 780px) {
  .system-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }
}
</style>
