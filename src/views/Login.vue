<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "src/core/middlewares/local-storage";
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

const randomTitleTips = (TitleTips: string[]) =>
  TitleTips[Math.floor(Math.random() * TitleTips.length)];

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
      form: {
        email: "",
        password: "",
        remember: false,
      },
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
      ...getSetup().form,
    };
  },
  mounted() {
    const setup = getSetup();

    this.title = randomTitleTips(setup.titleTips);
  },
  methods: {
    async login() {
      console.log(this.form);
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

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <form
        class="form-login"
        method=""
        action="/character/create"
        @submit="login"
      >
        <InputEmail
          :label="inputEmail.label"
          :placeholder="inputEmail.placeholder"
          @emit-content="emitEmail"
        />

        <InputPassword
          :label="inputPassword.label"
          :placeholder="inputPassword.placeholder"
          @emit-content="emitPassword"
        />

        <div class="form-options">
          <InputCheckBox :label="inputCheckbox.label" @click="clickRemember" />
          <a href="">{{ labelRecover }}</a>
        </div>

        <InputSubmit :label="inputSubmit.placeholder" />
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
