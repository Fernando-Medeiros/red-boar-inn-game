<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import InputTextComponent from "@/components/global/comp/input-text.comp.vue";
import InputSubmitComponent from "@/components/global/comp/input-submit.comp.vue";
import InputCheckBoxComponent from "@/components/global/comp/input-checkbox.comp.vue";

import utils from "@/../utils.json";

const randomTitleTips = () =>
  utils["login-tips"][Math.floor(Math.random() * utils["login-tips"].length)];

export default defineComponent({
  name: "LoginMainComponent",
  components: {
    SpriteComponent,
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
  <div class="background">
    <h1 class="title main-container">
      {{ title }}
    </h1>

    <span class="background-banner"></span>

    <div class="container-banner main-container">
      <SpriteComponent
        :rotate-y="true"
        :sprite-name="'peasant'"
        :sprite-gender="'woman'"
      />

      <form class="form-login" method="" @submit="login">
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

      <SpriteComponent
        :rotate-y="false"
        :sprite-name="'peasant'"
        :sprite-gender="'man'"
      />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("@/assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
  color: white;
}

.background-banner {
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 260px;
  background-color: #222222;
}
.container-banner {
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: 0.2fr 1fr 0.2fr;
}

.form-login {
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.4rem;
  margin-top: 1.2rem;
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
  .background {
    background-position: center;
  }
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
}
</style>
