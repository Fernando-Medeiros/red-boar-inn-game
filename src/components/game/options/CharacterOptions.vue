<script setup lang="ts">
import { reactive, ref } from "vue";
import { CharacterService } from "core/services/character-service";
import Helpers from "core/helpers/Helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const [{ characterName: inputs }, { success, error }, submitForm, form] = [
  SetupOptions[Helpers.translate()].character.forms,

  SetupResponses[Helpers.translate()].updates.charName,

  ref(false),

  reactive({
    charName: "",
  }),
];

async function saveCharacterName() {
  const { statusCode } = await CharacterService.update(form);

  Helpers.alertWithTimer(statusCode === 204 ? success : error, statusCode);

  submitForm.value = !submitForm.value;
}
</script>

<template>
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
</template>

<style scoped>
.form-container {
  display: grid;
  gap: 2rem;
}
</style>
