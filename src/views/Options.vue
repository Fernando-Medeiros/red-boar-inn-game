<script lang="ts">
import { defineComponent } from "vue";
import AlertMessage from "comp/global/helpers/alert-message.comp.vue";
import Guides from "comp/game/options/guides.comp.vue";
import CharacterOptions from "comp/game/options/character-options.comp.vue";
import SystemOptions from "comp/game/options/system-options.comp.vue";
import AccountOptions from "comp/game/options/account-options.comp.vue";

export default defineComponent({
  name: "OptionsView",
  expose: ["alertMessage"],
  components: {
    AlertMessage,
    Guides,
    CharacterOptions,
    SystemOptions,
    AccountOptions,
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
    receiveMessage(message: string) {
      this.alertMessage = message;
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="background-game">
    <div class="main-container">
      <Guides @show-guide="showGuide" :current-guide="activeGuide" />

      <CharacterOptions
        v-show="activeGuide === 'character'"
        @emit-message="receiveMessage"
      />

      <AccountOptions
        v-show="activeGuide === 'account'"
        @emit-message="receiveMessage"
      />

      <SystemOptions v-show="activeGuide === 'system'" />
    </div>
  </div>
</template>

<style scoped></style>
