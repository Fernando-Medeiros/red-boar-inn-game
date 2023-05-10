<script setup lang="ts">
import type { ClassesSchema } from "core/schemas/classes-schema";
import { reactive, ref } from "vue";
import { Helpers } from "core/helpers/helpers";
import useUpdateClass from "composable/useUpdateClass";
import SetupSelectClass from "setup/page.select-class.json";
import SetupResponses from "setup/global.responses.json";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import ClassSprite from "comp/global/sprites/ClassSprite.vue";
import IconSprite from "comp/global/sprites/IconSprite.vue";

const [{ classes, defaultClass, defaultGender, saveButton }, { success }] = [
  SetupSelectClass[Helpers.translate()],
  SetupResponses[Helpers.translate()].updates.className,
];

const [submitForm, classDescription, form] = [
  ref(false),
  ref(classes.peasant),
  reactive({
    gender: defaultGender,
    className: defaultClass,
  }),
];

async function saveClass() {
  submitForm.value = true;

  await useUpdateClass(form, success);

  submitForm.value = false;
}
</script>

<template>
  <div class="main-background">
    <div class="main-container class-background">
      <div class="sprite-container">
        <CharacterSprite
          :name="form.className"
          :gender="form.gender"
          :rotate-y="false"
        />
      </div>

      <div class="choice-classes-container">
        <ClassSprite
          v-for="className in Object.keys(classes)"
          :key="className"
          :name="className"
          :gender="form.gender"
          :style="'transform: rotateY(180deg)'"
          :is-active="form.className === className"
          @active-class="
            (className: ClassesSchema) => {
              form.className = className;
              classDescription = classes[className];
            }
          "
        />
      </div>

      <div class="description-container">
        <div class="className-and-button-container">
          <h2>{{ form.className }}</h2>

          <form @submit.prevent="saveClass">
            <InputSubmit :label="saveButton.label" :is-disabled="submitForm" />
          </form>
        </div>

        <div>
          <IconSprite
            :class="form.gender === 'man' ? 'iconActive' : 'iconInactive'"
            :name="'man'"
            @click="() => (form.gender = 'man')"
          />

          <IconSprite
            :class="form.gender === 'woman' ? 'iconActive' : 'iconInactive'"
            :name="'woman'"
            @click="() => (form.gender = 'woman')"
          />
        </div>

        <div class="class-description">
          <p v-for="paragraph in classDescription" :key="(paragraph as string)">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.class-background {
  background: linear-gradient(#81818157, #292929);
}
.sprite-container {
  display: grid;
  padding: 10px;
}
.choice-classes-container {
  display: grid;
  margin-block: 2rem;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
}
.description-container {
  display: grid;
  min-height: 300px;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  color: white;
  background: var(--cor-background-linear-gradient);
}
.className-and-button-container {
  display: flex;
  justify-content: space-between;
}

.iconInactive {
  cursor: pointer;
  padding-right: 1rem;
  filter: sepia();
}
.iconActive {
  cursor: pointer;
  padding-right: 1rem;
  filter: sepia() brightness(2);
}

.class-description {
  display: grid;
  gap: 1rem;
  margin: auto;
  height: auto;
}
.class-description > p {
  word-spacing: 5px;
  word-break: keep-all;
}

@media (max-width: 780px) {
  .description-container {
    padding: 10px;
  }
}
</style>
