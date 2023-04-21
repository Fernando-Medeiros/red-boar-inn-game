<script lang="ts">
import { defineComponent } from "vue";
import { CharacterService } from "core/api/character-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputCharacterName from "comp/global/input/input-character-name.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";

export default defineComponent({
  name: "OptionsCharacter",
  emits: ["emitMessage"],
  components: {
    InputCharacterName,
    InputSubmit,
  },
  data() {
    return {
      submitForm: false,
      form: {
        charName: "",
      },
      inputs: {
        ...SetupOptions[Helpers.getLanguage()].character.forms.characterName,
      },
    };
  },
  methods: {
    async saveCharacterName() {
      this.blockInputSubmit();

      const { status } = await CharacterService.update(this.form);

      const {
        charName: { success, error },
      } = SetupResponses[Helpers.getLanguage()].updates;

      this.$emit("emitMessage", status === 204 ? success : error);

      this.blockInputSubmit();
    },

    blockInputSubmit() {
      this.submitForm = !this.submitForm;
    },
    receiveCharName(name: string) {
      this.form.charName = name;
    },
  },
});
</script>

<template>
  <div class="top-character-name">
    <form class="form-container" @submit.prevent="saveCharacterName">
      <InputCharacterName
        :label="inputs.name.label"
        :placeholder="inputs.name.placeholder"
        :description="inputs.name.description"
        @emit-content="receiveCharName"
      />

      <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
    </form>
  </div>
</template>

<style scoped>
.top-character-name {
  margin-bottom: 2rem;
}
.form-container {
  display: grid;
  gap: 1rem;
}
</style>
