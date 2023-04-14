<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import SetupRegister from "setup/page.register.json";

import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputName from "comp/global/input/input-name.comp.vue";
import InputEmail from "comp/global/input/input-email.comp.vue";
import InputPassword from "comp/global/input/input-password.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";

function getSetup() {
  return SetupRegister[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "RegisterView",
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
      title: "",
      redirectTo: "/auth/login",
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
  created() {
    const { title } = getSetup();
    this.title = title;
  },
  methods: {
    async registerAccount() {
      this.$router.push({ path: this.redirectTo });
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
  <div>
    <BannerTitle :title="title" />

    <BannerSprites
      :sprite-left="banner.spriteLeft"
      :sprite-right="banner.spriteRight"
    />

    <div class="main-container">
      <form class="form-login" @submit.prevent="registerAccount">
        <InputName
          :label="inputs.firstName.label"
          :placeholder="inputs.firstName.placeholder"
          @emit-content="emitFirstName"
        />

        <InputName
          :label="inputs.lastName.label"
          :placeholder="inputs.lastName.placeholder"
          @emit-content="emitLastName"
        />

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

        <InputPassword
          :label="inputs.confirmPassword.label"
          :placeholder="inputs.confirmPassword.placeholder"
          @emit-content="emitConfirmPassword"
        />

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
