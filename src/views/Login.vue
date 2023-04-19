<script lang="ts">
import { defineComponent } from "vue";
import { ManagerSession } from "core/api/manager-session";
import { ManagerCharacter } from "core/api/manager-character";
import { ManagerEquipment } from "core/api/manager-equipment";
import { ManagerInventory } from "core/api/manager-inventory";
import { ManagerStatus } from "core/api/manager-status";
import { ManagerSkills } from "core/api/manager-skills";
import { LocalStorage } from "core/storage/local.storage";
import { LocalSession } from "core/storage/session.storage";

import SetupLogin from "setup/page.login.json";
import SetupLoginRandomNames from "setup/page.login.names.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputEmail from "comp/global/input/input-email.comp.vue";
import InputPassword from "comp/global/input/input-password.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import InputCheckBox from "comp/global/input/input-checkbox.comp.vue";

function getSetup() {
  return SetupLogin[LocalStorage.getLanguage()];
}

function random(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export default defineComponent({
  name: "LoginView",
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputSubmit,
    InputCheckBox,
  },
  data() {
    return {
      title: "",
      alertMessage: "",
      redirectTo: "/character/profile",

      form: {
        email: "",
        password: "",
        remember: false,
      },
      banner: {
        spriteLeft: {
          name: "peasant",
          gender: "woman",
          rotateY: true,
        },
        spriteRight: {
          name: "peasant",
          gender: "man",
          rotateY: false,
        },
      },
      inputs: { ...getSetup().form },
    };
  },
  mounted() {
    const { titleTips } = getSetup();
    this.title = random(titleTips);
  },
  methods: {
    async login() {
      const { message, pubId, access, refresh, type } =
        await ManagerSession.login(this.form);

      message
        ? (this.alertMessage = message)
        : [
            LocalSession.set({ pubId, access, refresh, type }),

            (await ManagerCharacter.get())?.pubId
              ? await this.loadCharacter()
              : [await this.createCharacter(), await this.loadCharacter()],
          ];
    },

    async createCharacter() {
      const randomName =
        random(SetupLoginRandomNames.names) +
        this.form.email.slice(0, 3).toUpperCase();

      await Promise.all([
        ManagerCharacter.create({ charName: randomName }),
        ManagerEquipment.create(),
        ManagerInventory.create(),
        ManagerStatus.create(),
        ManagerSkills.create(),
      ]);
    },

    async loadCharacter() {
      await Promise.all([
        ManagerCharacter.get(),
        ManagerEquipment.get(),
        ManagerInventory.get(),
        ManagerStatus.get(),
        ManagerSkills.get(),
      ]).then(async ([character, equipment, inventory, status, skills]) => {
        LocalStorage.setCharacter({
          character: character,
          equipment: equipment,
          inventory: inventory,
          status: status,
          skills: skills,
        });

        this.$router.push({ path: this.redirectTo });

        location.reload();
      });
    },

    emitEmail(value: string) {
      this.form.email = value;
    },
    emitPassword(value: string) {
      this.form.password = value;
    },
    clickRemember() {
      this.form.remember = !this.form.remember;
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

    <div class="main-container">
      <div class="background">
        <span class="alert-message">
          <p>{{ alertMessage }}</p>
        </span>

        <form class="form-login" @submit.prevent="login">
          <InputEmail
            :label="inputs.email.label"
            :placeholder="inputs.email.placeholder"
            :description="inputs.email.description"
            @emit-content="emitEmail"
          />

          <InputPassword
            :label="inputs.password.label"
            :placeholder="inputs.password.placeholder"
            :description="inputs.password.description"
            @emit-content="emitPassword"
          />

          <div class="form-options">
            <InputCheckBox
              :label="inputs.checkbox.label"
              @click="clickRemember"
            />
            <a :href="inputs.recover.route">{{ inputs.recover.label }}</a>
          </div>

          <InputSubmit :label="inputs.submit.placeholder" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  padding-block: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}
.alert-message {
  color: tomato;
  padding-block: 1rem;
  text-align: center;
}
.form-login {
  z-index: 1;
  display: grid;
  justify-content: center;
  gap: 2rem;
}
.form-options {
  display: flex;
  justify-content: space-between;
}
.form-options a {
  color: white;
  text-decoration: none;
}
.form-options a:hover {
  color: burlywood;
}
@media (max-width: 780px) {
}
</style>
