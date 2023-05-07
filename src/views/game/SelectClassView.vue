<script setup lang="ts">
import type { ClassesSchema } from "core/schemas/classes.schema";
import { ref, defineExpose } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupSelectClass from "setup/page.select-class.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import ClassSprite from "comp/global/sprites/ClassSprite.vue";
import IconSprite from "comp/global/sprites/IconSprite.vue";

const Setup = SetupSelectClass[Helpers.translate()];

const {
  updates: {
    className: { success, error },
  },
} = SetupResponses[Helpers.translate()];

const alertMessage = ref("");
defineExpose({ alertMessage });

const saveButton = Setup.saveButton;
const classOptions = Object.keys(Setup.classes);

const submitForm = ref(false);
const classDescription = ref(Setup.classes.peasant);

const form = ref({
  gender: Setup.defaultGender,
  className: Setup.defaultClass,
});

async function saveClass() {
  const { statusCode } = await CharacterService.update(form.value);

  alertMessage.value = statusCode === 204 ? success : error;

  submitForm.value = !submitForm.value;
}
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <div class="main-background">
    <div
      class="main-container"
      style="background: linear-gradient(#81818157, #292929)"
    >
      <div class="sprite-container">
        <CharacterSprite
          :name="form.className"
          :gender="form.gender"
          :rotate-y="false"
        />
      </div>

      <div class="choice-classes-container">
        <ClassSprite
          v-for="className in classOptions"
          :key="className"
          :name="className"
          :gender="form.gender"
          :style="'transform: rotateY(180deg)'"
          :is-active="form.className === className"
          @active-class="
            (className: ClassesSchema) => {
              form.className = className;
              classDescription = Setup.classes[className];
            }
          "
        />
      </div>

      <div class="description-container">
        <div class="className-and-button-container">
          <h2>{{ form.className }}</h2>

          <form @submit.prevent="saveClass" @submit="submitForm = !submitForm">
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
