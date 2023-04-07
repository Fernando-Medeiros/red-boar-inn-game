<script lang="ts">
import { defineComponent } from "vue";
import BannerTitle from "@/components/global/composition/banner-title.comp.vue";
import BannerSprites from "@/components/global/composition/banner-sprites.comp.vue";
import InputName from "@/components/global/comp/input-name.comp.vue";
import InputEmail from "@/components/global/comp/input-email.comp.vue";
import InputPassword from "@/components/global/comp/input-password.comp.vue";
import InputSubmit from "@/components/global/comp/input-submit.comp.vue";

export default defineComponent({
  name: "RegisterMainComponent",
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputName,
    InputSubmit,
  },
  data() {
    return {
      title: "Registre-se",
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      inputFirstName: {
        label: "Nome*",
        placeholder: "Example",
      },
      inputLastName: {
        label: "Sobrenome*",
        placeholder: "Example ou  Example Example",
      },
      inputEmail: {
        label: "Email*",
        placeholder: "example@email.com",
      },
      inputPassword: {
        label: "Senha*",
        placeholder: "Example@01",
      },
      inputPasswordConfirm: {
        label: "Confirme a senha*",
        placeholder: "Example@01",
      },
      inputSubmit: {
        placeholder: "Registrar",
      },
    };
  },
  methods: {
    async register() {
      console.log(this.form);
    },
    emitFirstName(value: string) {
      this.form.firstName = value;
    },
    emitLastName(value: string) {
      this.form.lastName = value;
    },
    emitEmail(value: string) {
      this.form.email = value;
    },
    emitPassword(value: string) {
      this.form.password = value;
    },
    emitConfirmPassword(value: string) {
      this.form.confirmPassword = value;
    },
  },
});
</script>

<template>
  <div class="view-container">
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="spriteLeft" :sprite-right="spriteRight" />

    <div class="main-container">
      <form class="form-login" method="" @submit.prevent="register">
        <InputName
          :label="inputFirstName.label"
          :placeholder="inputFirstName.placeholder"
          @emit-content="emitFirstName"
        />

        <InputName
          :label="inputLastName.label"
          :placeholder="inputLastName.placeholder"
          @emit-content="emitLastName"
        />

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

        <InputPassword
          :label="inputPasswordConfirm.label"
          :placeholder="inputPasswordConfirm.placeholder"
          @emit-content="emitConfirmPassword"
        />

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
  width: 100%;
  gap: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}

@media (max-width: 780px) {
}
</style>
