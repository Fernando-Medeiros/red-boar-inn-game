<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/storage/local.storage";
import SetupOptions from "setup/page.options.json";

import InputCharacterName from "comp/global/input/input-character-name.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";

function getSetup() {
  return SetupOptions[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "OptionsCharacter",
  components: {
    InputCharacterName,
    InputSubmit,
  },
  data() {
    return {
      form: {
        characterName: "",
      },
      formName: { ...getSetup().character.forms.characterName },
    };
  },
  methods: {
    saveCharacterName() {
      console.log(this.form);
    },
    emitCharacterName(name: string) {
      this.form.characterName = name;
    },
  },
});
</script>

<template>
  <div class="top-character-name">
    <form class="form-container" @submit.prevent="saveCharacterName">
      <InputCharacterName
        :label="formName.name.label"
        :placeholder="formName.name.placeholder"
        :description="formName.name.description"
        @emit-content="emitCharacterName"
      />

      <InputSubmit :label="formName.submit.label" />
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
@media (max-width: 780px) {
}
</style>
