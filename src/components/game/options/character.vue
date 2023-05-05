<script lang="ts">
import { defineComponent } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputCharacterName from "comp/global/inputs/InputCharacterName.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const Setup = SetupOptions[Helpers.translate()];

const {
  updates: {
    charName: { success, error },
  },
} = SetupResponses[Helpers.translate()];

export default defineComponent({
  name: "CharacterOptions",
  emits: ["emitMessage"],
  components: {
    InputCharacterName,
    InputSubmit,
  },
  computed: {
    inputs() {
      const {
        forms: { characterName },
      } = Setup.character;

      return characterName;
    },
  },
  data() {
    return {
      submitForm: false,

      form: {
        charName: "",
      },
    };
  },
  methods: {
    async saveCharacterName() {
      const { status } = await CharacterService.update(this.form);

      this.$emit("emitMessage", status === 204 ? success : error);

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
    <form
      class="form-container"
      @submit.prevent="saveCharacterName"
      @submit="submitForm = !submitForm"
    >
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
