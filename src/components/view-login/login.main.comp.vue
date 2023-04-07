<script lang="ts">
import { defineComponent } from "vue";
import BannerTitle from "@/components/global/composition/banner-title.comp.vue";
import BannerSprites from "@/components/global/composition/banner-sprites.comp.vue";
import InputEmail from "@/components/global/comp/input-email.comp.vue";
import InputPassword from "@/components/global/comp/input-password.comp.vue";
import InputSubmit from "@/components/global/comp/input-submit.comp.vue";
import InputCheckBox from "@/components/global/comp/input-checkbox.comp.vue";

import utils from "@/../utils.json";

const randomTitleTips = () =>
  utils["login-tips"][Math.floor(Math.random() * utils["login-tips"].length)];

export default defineComponent({
  name: "LoginMainComponent",
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
      title: randomTitleTips(),
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
      inputEmail: {
        label: "Email",
        placeholder: "example@email.com",
      },
      inputPassword: {
        label: "Senha",
        placeholder: "Example@01",
      },
      inputCheckbox: {
        label: "lembrar",
      },
      inputSubmit: {
        placeholder: "Acessar",
      },
    };
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
    clickRemeber() {
      this.form.remember = !this.form.remember;
    },
  },
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <form class="form-login" method="" @submit.prevent="login">
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
          <InputCheckBox :label="inputCheckbox.label" @click="clickRemeber" />
          <a href="">recuperar a senha</a>
        </div>

        <InputSubmit :placeholder="inputSubmit.placeholder" />
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
