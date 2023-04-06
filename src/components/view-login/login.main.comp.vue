<script lang="ts">
import { defineComponent } from "vue";
import BannerTitleComponent from "@/components/global/composition/banner-title.comp.vue";
import BannerSpritesComponent from "@/components/global/composition/banner-sprites.comp.vue";
import InputTextComponent from "@/components/global/comp/input-text.comp.vue";
import InputSubmitComponent from "@/components/global/comp/input-submit.comp.vue";
import InputCheckBoxComponent from "@/components/global/comp/input-checkbox.comp.vue";

import utils from "@/../utils.json";

const randomTitleTips = () =>
  utils["login-tips"][Math.floor(Math.random() * utils["login-tips"].length)];

export default defineComponent({
  name: "LoginMainComponent",
  components: {
    BannerTitleComponent,
    BannerSpritesComponent,
    InputTextComponent,
    InputSubmitComponent,
    InputCheckBoxComponent,
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
    <BannerTitleComponent :title="title" />

    <BannerSpritesComponent
      :sprite-left="spriteLeft"
      :sprite-right="spriteRight"
    />

    <div class="main-container">
      <form class="form-login" method="" @submit.prevent="login">
        <InputTextComponent
          :placeholder="'digite o seu email ...'"
          @emit-content="emitEmail"
        />

        <InputTextComponent
          :placeholder="'digite a sua senha ...'"
          @emit-content="emitPassword"
        />

        <div class="form-options">
          <InputCheckBoxComponent :label="'lembrar'" @click="clickRemeber" />
          <a href="">recuperar a senha</a>
        </div>

        <InputSubmitComponent :placeholder="'Acessar'" />
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
  gap: 1.4rem;
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
  .form-login {
    margin-top: 4rem;
  }
}
</style>
