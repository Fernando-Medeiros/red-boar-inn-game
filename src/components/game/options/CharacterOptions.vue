<script setup lang="ts">
import { defineEmits, reactive, ref } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const Setup = SetupOptions[Helpers.translate()];

const {
  updates: {
    charName: { success, error },
  },
} = SetupResponses[Helpers.translate()];

const emit = defineEmits(["emitMessage"]);

const inputs = { ...Setup.character.forms.characterName };

const submitForm = ref(false);
const form = reactive({
  charName: "",
});

async function saveCharacterName() {
  const { statusCode } = await CharacterService.update(form);

  emit("emitMessage", statusCode === 204 ? success : error);

  submitForm.value = !submitForm.value;
}
</script>

<template>
  <div>
    <form
      class="form-container"
      @submit.prevent="saveCharacterName"
      @submit="submitForm = !submitForm"
    >
      <InputComp
        :type="'text'"
        :regex="'charName'"
        :label="inputs.name.label"
        :placeholder="inputs.name.placeholder"
        :description="inputs.name.description"
        @emit-content="(name) => (form.charName = name)"
      />

      <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  gap: 2rem;
}
</style>
