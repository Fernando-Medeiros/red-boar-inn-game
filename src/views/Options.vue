<script lang="ts">
import { defineComponent } from "vue";
import AlertMessage from "comp/global/helpers/alert-message.comp.vue";
import OptionsGuides from "comp/game/options/guides.comp.vue";
import OptionsCharacter from "comp/game/options/character-options.comp.vue";
import OptionsSystem from "comp/game/options/system-options.comp.vue";

export default defineComponent({
  name: "OptionsView",
  expose: ["alertMessage"],
  components: {
    AlertMessage,
    OptionsGuides,
    OptionsCharacter,
    OptionsSystem,
  },
  data() {
    return {
      alertMessage: "",
      activeGuide: "character",
    };
  },
  methods: {
    showGuide(guide: string) {
      this.activeGuide = guide;
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="background-game">
    <div class="main-container">
      <OptionsGuides @show-guide="showGuide" :current-guide="activeGuide" />

      <OptionsCharacter
        v-if="activeGuide === 'character'"
        @emit-message="(message: string) => (alertMessage = message)"
      />

      <OptionsSystem v-if="activeGuide === 'system'" />
    </div>
  </div>
</template>

<style scoped></style>
