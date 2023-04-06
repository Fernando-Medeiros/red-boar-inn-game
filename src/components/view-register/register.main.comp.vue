<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import InputTextComponent from "@/components/global/comp/input-text.comp.vue";
import InputSubmitComponent from "@/components/global/comp/input-submit.comp.vue";

export default defineComponent({
  name: "RegisterMainComponent",
  components: {
    SpriteComponent,
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
  height: 220px;
  background-color: #222222;
}
.container-banner {
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: 0.2fr 1fr 0.2fr;
}

.form-login {
  z-index: 1;
  display: grid;
  width: 100%;
  gap: 1.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  box-shadow: inset 0px 4px 14px rgba(219, 219, 219, 0.25);
  background: #222222;
}

@media (max-width: 780px) {
  .background {
    background-position: center;
  }
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
  .background-banner {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 600px;
    background-color: #222222;
  }
  .container-banner {
    grid-template-columns: auto;
  }
}
</style>
