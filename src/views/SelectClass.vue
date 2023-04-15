<script lang="ts">
import type { ClassesSchema } from "core/schemas/classes.schema";
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import SetupSelectClass from "setup/page.select-class.json";

import Sprite from "comp/global/sprite/sprite.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import ClassButton from "comp/game/select-class/button-class.comp.vue";
import ClassGenderButton from "comp/game/select-class/button-gender.comp.vue";
import ClassDescription from "comp/game/select-class/description.comp.vue";

function getSetup() {
  return SetupSelectClass[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "SelectClassView",
  components: {
    Sprite,
    InputSubmit,
    ClassButton,
    ClassGenderButton,
    ClassDescription,
  },
  data() {
    return {
      currentClass: "",
      currentGender: "",

      classList: [""],
      classDescription: [""],

      buttonSave: { label: "" },
    };
  },
  created() {
    const { classes, defaultClass, defaultGender, buttonSave } = getSetup();

    this.classList = Array.from(Object.keys(classes));
    this.classDescription = classes.peasant;

    this.currentClass = defaultClass;
    this.currentGender = defaultGender;

    this.buttonSave = buttonSave;
  },
  methods: {
    saveClass() {
      //
    },
    selectClass(className: string) {
      this.currentClass = className;
      this.classDescription = getSetup().classes[className as ClassesSchema];
    },
    selectClassGender(classGender: string) {
      this.currentGender = classGender;
    },
  },
});
</script>

<template>
  <div class="background-game">
    <div class="main-container">
      <div class="sprite-and-input-container">
        <Sprite
          :sprite-name="currentClass"
          :sprite-gender="currentGender"
          :rotate-y="true"
        />

        <InputSubmit :label="buttonSave.label" />
      </div>

      <div class="choice-classes-container">
        <ClassButton
          v-for="className in classList"
          :key="className"
          :sprite-name="className"
          :sprite-gender="currentGender"
          @active-class="selectClass(className)"
        />
      </div>

      <div class="description-container">
        <h2>{{ currentClass }}</h2>

        <div class="class-gender-container">
          <ClassGenderButton
            :sprite-name="'man'"
            @active-class-gender="selectClassGender('man')"
          />
          <ClassGenderButton
            :sprite-name="'woman'"
            @active-class-gender="selectClassGender('woman')"
          />
        </div>

        <ClassDescription :description="classDescription" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sprite-and-input-container {
  display: grid;
  padding: 10px;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  justify-content: space-between;
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
