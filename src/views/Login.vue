<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import { Session } from "core/auth/session";

import ExampleCharacter from "core/database/character-example.json";
import SetupLogin from "setup/page.login.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputEmail from "comp/global/input/input-email.comp.vue";
import InputPassword from "comp/global/input/input-password.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import InputCheckBox from "comp/global/input/input-checkbox.comp.vue";

function getSetup() {
  return SetupLogin[LocalStorage.getLanguage()];
}

function randomTitleTips(TitleTips: string[]) {
  return TitleTips[Math.floor(Math.random() * TitleTips.length)];
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
    this.title = randomTitleTips(titleTips);
  },
  methods: {
    async login() {
      Session.setSession("bearerToken");
      LocalStorage.setCharacter(ExampleCharacter);

      this.$router.push({
        path: this.redirectTo,
      });

      location.reload();
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
      <form class="form-login" @submit.prevent="login">
        <InputEmail
          :label="inputs.email.label"
          :placeholder="inputs.email.placeholder"
          @emit-content="emitEmail"
        />

        <InputPassword
          :label="inputs.password.label"
          :placeholder="inputs.password.placeholder"
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
</template>

<style scoped>
.view-container {
  margin-bottom: 20px;
}
.form-login {
  z-index: 1;
  display: grid;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
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
