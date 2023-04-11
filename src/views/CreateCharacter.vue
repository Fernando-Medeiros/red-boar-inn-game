<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/language";
import SetupCreateCharacter from "setup/page.create-character.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputCharacterName from "src/components/global/input/input-character-name.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import Sprite from "comp/global/sprite/sprite.comp.vue";
import ClassButton from "comp/view-create-character/button-class.comp.vue";
import ClassGenderButton from "comp/view-create-character/button-gender.comp.vue";
import ClassDescription from "comp/view-create-character/description.comp.vue";

type Classes = "mage" | "merchant" | "peasant" | "thief" | "warrior";

function getSetup() {
  return SetupCreateCharacter[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "CreateCharacterView",
  components: {
    BannerTitle,
    BannerSprites,
    InputCharacterName,
    InputSubmit,
    Sprite,
    ClassButton,
    ClassGenderButton,
    ClassDescription,
  },
  data() {
    return {
      title: "",
      classList: [""],
      classDescription: [""],

      form: {
        characterName: "",
        currentClass: "",
        currentGender: "",
      },

      banner: {
        spriteLeft: {
          name: "thief",
          gender: "woman",
          rotateY: true,
        },
        spriteRight: {
          name: "thief",
          gender: "man",
          rotateY: false,
        },
      },
      ...getSetup().form,
    };
  },
  created() {
    const setup = getSetup();

    this.title = setup.title;
    this.classList = Array.from(Object.keys(setup.class));
    this.classDescription = setup.class.peasant;

    this.form.currentClass = setup.currentClass;
    this.form.currentGender = setup.currentGender;
  },
  methods: {
    async createCharacter() {
      console.log(this.form);
    },
    emitCharacterName(name: string) {
      this.form.characterName = name;
    },
    activeClass(className: Classes) {
      this.form.currentClass = className;
      this.classDescription = getSetup().class[className];
    },
    choiceClassGender(classGender: "man" | "woman") {
      this.form.currentGender = classGender;
    },
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites
      :sprite-left="banner.spriteLeft"
      :sprite-right="banner.spriteRight"
    />

    <div class="background">
      <div class="main-container">
        <div class="sprite-and-input-container">
          <Sprite
            :sprite-name="form.currentClass"
            :sprite-gender="form.currentGender"
            :rotate-y="true"
          />

          <form
            class="form-container"
            action=""
            method=""
            @submit.prevent="createCharacter"
          >
            <InputCharacterName
              :label="inputCharacterName.label"
              :placeholder="inputCharacterName.placeholder"
              @emit-content="emitCharacterName"
            />
            <InputSubmit :label="inputSubmit.label" />
          </form>
        </div>

        <div class="choice-classes-container">
          <ClassButton
            v-for="className in classList"
            :key="className"
            :sprite-name="className"
            :sprite-gender="form.currentGender"
            @active-class="activeClass(className as Classes)"
          />
        </div>

        <div class="description-container">
          <h2>{{ form.currentClass }}</h2>

          <div class="class-gender-container">
            <ClassGenderButton
              :sprite-name="'man'"
              @active-class-gender="choiceClassGender('man')"
            />
            <ClassGenderButton
              :sprite-name="'woman'"
              @active-class-gender="choiceClassGender('woman')"
            />
          </div>

          <ClassDescription :description="classDescription" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  border-radius: 5px;
  background: linear-gradient(#282828e1, #323232a1);
  padding-bottom: 2rem;
}
.sprite-and-input-container {
  display: grid;
  padding: 10px;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  justify-content: space-between;
}
.form-container {
  display: grid;
  gap: 1rem;
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
