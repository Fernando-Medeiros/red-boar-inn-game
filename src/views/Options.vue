<script lang="ts">
import { defineComponent } from "vue";
import OptionsGuides from "comp/game/options/options-guides.comp.vue";
import OptionsCharacter from "comp/game/options/options-character.comp.vue";
import OptionsSystem from "comp/game/options/options-system.comp.vue";

export default defineComponent({
  name: "OptionsView",
  components: {
    OptionsGuides,
    OptionsCharacter,
    OptionsSystem,
  },
  data() {
    return {
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
  <div class="background-game">
    <div class="main-container">
      <OptionsGuides @show-guide="showGuide" />

      <OptionsCharacter v-if="activeGuide === 'character'" />

      <OptionsSystem v-if="activeGuide === 'system'" />
    </div>
  </div>
</template>

<style scoped></style>
