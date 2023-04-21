<script lang="ts">
import { defineComponent } from "vue";
import type { ClassesSchema } from "core/schemas/classes.schema";
import { CharacterService } from "core/api/character-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupSelectClass from "setup/page.select-class.json";
import AlertMessage from "comp/global/helpers/alert-message.comp.vue";
import Sprite from "comp/global/sprite/sprite.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import ClassButton from "comp/game/select-class/button-class.comp.vue";
import ClassGenderButton from "comp/game/select-class/button-gender.comp.vue";
import ClassDescription from "comp/game/select-class/description.comp.vue";

export default defineComponent({
  name: "SelectClassView",
  components: {
    Sprite,
    InputSubmit,
    ClassButton,
    ClassGenderButton,
    ClassDescription,
    AlertMessage,
  },
  data() {
    return {
      alertMessage: "",
      submitForm: false,

      form: {
        gender: "",
        className: "",
      },
      classList: [""],
      classDescription: [""],
      buttonSave: { label: "" },
    };
  },
  created() {
    const { classes, defaultClass, defaultGender, buttonSave } =
      SetupSelectClass[Helpers.getLanguage()];

    this.classList = Array.from(Object.keys(classes));
    this.classDescription = classes.peasant;
    this.buttonSave = buttonSave;

    Object.assign(this.form, {
      gender: defaultGender,
      className: defaultClass,
    });
  },
  methods: {
    async saveClass() {
      this.blockInputSubmit();

      const { message } = await CharacterService.update(this.form);

      message ? (this.alertMessage = message) : "";

      this.blockInputSubmit();
    },

    blockInputSubmit() {
      this.submitForm = !this.submitForm;
    },
    deleteMessage(value: string) {
      this.alertMessage = value;
    },
    selectClassGender(classGender: string) {
      this.form.gender = classGender;
    },
    selectClass(className: ClassesSchema) {
      const { classes } = SetupSelectClass[Helpers.getLanguage()];

      this.form.className = className;

      this.classDescription = classes[className as ClassesSchema];
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" @delete-message="deleteMessage" />

  <div class="background-game">
    <div class="main-container">
      <div class="sprite-container">
        <Sprite
          :sprite-name="form.className"
          :sprite-gender="form.gender"
          :rotate-y="true"
        />
      </div>

      <div class="choice-classes-container">
        <ClassButton
          v-for="className in classList"
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

          <form @submit.prevent="saveClass">
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
