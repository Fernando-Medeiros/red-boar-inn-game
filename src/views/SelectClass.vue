<script lang="ts">
import { defineComponent } from "vue";
import type { ClassesSchema } from "core/schemas/classes.schema";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupSelectClass from "setup/page.select-class.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import ClassButton from "comp/game/select-class/button-class.vue";
import ClassGenderButton from "comp/game/select-class/button-gender.vue";
import ClassDescription from "comp/game/select-class/description.vue";

const Setup = SetupSelectClass[Helpers.translate()];

const {
  updates: {
    className: { success, error },
  },
} = SetupResponses[Helpers.translate()];

export default defineComponent({
  name: "SelectClassView",
  expose: ["alertMessage"],
  components: {
    CharacterSprite,
    InputSubmit,
    ClassButton,
    ClassGenderButton,
    ClassDescription,
    AlertMessage,
  },
  computed: {
    buttonSave() {
      return Setup.buttonSave;
    },
    classOptions() {
      return Object.keys(Setup.classes);
    },
  },
  data() {
    return {
      alertMessage: "",
      submitForm: false,
      classDescription: Setup.classes.peasant,

      form: {
        gender: Setup.defaultGender,
        className: Setup.defaultClass,
      },
    };
  },
  methods: {
    async saveClass() {
      const { status } = await CharacterService.update(this.form);

      this.alertMessage = status === 204 ? success : error;

      this.submitForm = !this.submitForm;
    },
    selectClassGender(classGender: string) {
      this.form.gender = classGender;
    },
    selectClass(className: ClassesSchema) {
      this.form.className = className;

      this.classDescription = Setup.classes[className];
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="main-background">
    <div class="main-container">
      <div class="sprite-container">
        <CharacterSprite
          :name="form.className"
          :gender="form.gender"
          :rotate-y="true"
        />
      </div>

      <div class="choice-classes-container">
        <ClassButton
          v-for="className in classOptions"
          :key="className"
          :sprite-name="className"
          :sprite-gender="form.gender"
          :is-active="form.className === className"
          @active-class="selectClass"
        />
      </div>

      <div class="description-container">
        <div class="className-and-button-container">
          <h2>{{ form.className }}</h2>

          <form @submit.prevent="saveClass" @submit="submitForm = !submitForm">
            <InputSubmit :label="buttonSave.label" :is-disabled="submitForm" />
          </form>
        </div>

        <div class="class-gender-container">
          <ClassGenderButton
            :sprite-name="'man'"
            :is-active="form.gender === 'man'"
            @active-class-gender="selectClassGender"
          />
          <ClassGenderButton
            :sprite-name="'woman'"
            :is-active="form.gender === 'woman'"
            @active-class-gender="selectClassGender"
          />
        </div>

        <ClassDescription :description="classDescription" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sprite-container {
  display: grid;
  padding: 10px;
  align-items: center;
  justify-content: center;
}
.choice-classes-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: space-around;
}
.description-container {
  display: grid;
  min-height: 300px;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  color: white;
  background: var(--cor-background-linear-gradient),
    var(--cor-background-linear-gradient);
}
.className-and-button-container {
  display: flex;
  justify-content: space-between;
}
.class-gender-container {
  display: flex;
  gap: 1rem;
}
@media (max-width: 780px) {
  .description-container {
    padding: 10px;
  }
}
</style>
