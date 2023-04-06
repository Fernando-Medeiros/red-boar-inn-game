<script lang="ts">
import { defineComponent } from "vue";
import BannerTitleComponent from "@/components/global/composition/banner-title.comp.vue";
import BannerSpritesComponent from "@/components/global/composition/banner-sprites.comp.vue";
import InputTextComponent from "@/components/global/comp/input-text.comp.vue";
import InputSubmitComponent from "@/components/global/comp/input-submit.comp.vue";

export default defineComponent({
  name: "RegisterMainComponent",
  components: {
    BannerTitleComponent,
    BannerSpritesComponent,
    InputTextComponent,
    InputSubmitComponent,
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
    <BannerTitleComponent :title="title" />

    <BannerSpritesComponent
      :sprite-left="spriteLeft"
      :sprite-right="spriteRight"
    />

    <div class="main-container">
      <form class="form-login" method="" @submit.prevent="register">
        <InputTextComponent
          :placeholder="'digite o seu nome ...'"
          @emit-content="emitFirstName"
        />

        <InputTextComponent
          :placeholder="'digite o seu sobrenome ...'"
          @emit-content="emitLastName"
        />

        <InputTextComponent
          :placeholder="'digite o seu email ...'"
          @emit-content="emitEmail"
        />

        <InputTextComponent
          :placeholder="'digite a sua senha ...'"
          @emit-content="emitPassword"
        />

        <InputTextComponent
          :placeholder="'confirme a senha ...'"
          @emit-content="emitConfirmPassword"
        />

        <InputSubmitComponent :placeholder="'Registrar'" />
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
