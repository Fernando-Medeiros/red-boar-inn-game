<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import IconButton from "comp/global/button/icon-button.vue";
import LanguageButton from "comp/global/button/language-button.vue";

export default defineComponent({
  name: "SystemOptions",
  components: {
    IconButton,
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
  grid-template-columns: 1fr 1fr;
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
}
</style>
