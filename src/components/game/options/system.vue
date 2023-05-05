<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import IconButton from "comp/global/buttons/IconButton.vue";
import ThemeButton from "comp/global/buttons/ThemeButton.vue";
import LanguageButton from "comp/global/buttons/LanguageButton.vue";

export default defineComponent({
  name: "SystemOptions",
  components: {
    IconButton,
    ThemeButton,
    LanguageButton,
  },
  computed: {
    logout() {
      return SetupOptions[Helpers.translate()].system.logout;
    },
    language() {
      return SetupOptions[Helpers.translate()].system.language;
    },
  },
});
</script>

<template>
  <div class="system-container">
    <div class="language-container">
      <p>{{ language.label }}</p>

      <LanguageButton />
    </div>

    <ThemeButton />

    <div>
      <IconButton
        :name="logout.icon"
        :label="logout.label"
        :to-route="logout.route"
      />
    </div>
  </div>
</template>

<style scoped>
.system-container {
  display: grid;
  gap: 1rem;
  color: var(--cor-font-color);
  grid-template-columns: 1fr 1fr 1fr;
}
.system-container > div {
  width: auto;
  margin: auto;
}
.language-container {
  display: flex;
  width: max-content;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}

@media (max-width: 780px) {
  .system-container {
    gap: 2rem;
    grid-template-columns: auto;
  }
}
</style>
