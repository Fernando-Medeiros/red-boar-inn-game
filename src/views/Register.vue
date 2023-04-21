<script lang="ts">
import { defineComponent } from "vue";
import { AccountService } from "core/api/account-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupRegister from "setup/page.register.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/alert-message.comp.vue";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputName from "comp/global/input/input-name.comp.vue";
import InputEmail from "comp/global/input/input-email.comp.vue";
import InputPassword from "comp/global/input/input-password.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";

export default defineComponent({
  name: "RegisterView",
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputName,
    InputSubmit,
    AlertMessage,
  },
  data() {
    return {
      title: "",
      alertMessage: "",
      submitForm: false,
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
      inputs: { ...SetupRegister[Helpers.getLanguage()].form },
    };
  },
  created() {
    const { title } = SetupRegister[Helpers.getLanguage()];
    this.title = title;
  },
  methods: {
    async createAccount() {
      this.blockInputSubmit();

      let success = SetupResponses[Helpers.getLanguage()].register;
      let error: string | unknown | undefined;

      this.checkPassword()
        ? (error = (await AccountService.create(this.form))?.message)
        : (error = this.inputs.confirmPassword.message);

      this.alertMessage = String(error ?? success);

      setTimeout(() => {
        error ? this.blockInputSubmit() : this.redirectAfterLoad();
      }, 3000);
    },

    blockInputSubmit() {
      this.submitForm = !this.submitForm;
    },
    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
    },
    checkPassword() {
      const { password, confirmPassword } = this.form;
      return confirmPassword === password;
    },
    deleteMessage(value: string) {
      this.alertMessage = value;
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
    <AlertMessage :message="alertMessage" @delete-message="deleteMessage" />

    <BannerTitle :title="title" />

    <BannerSprites
      :sprite-left="banner.spriteLeft"
      :sprite-right="banner.spriteRight"
    />

    <div class="main-container">
      <div class="background">
        <form class="form-login" @submit.prevent="createAccount">
          <InputName
            :label="inputs.firstName.label"
            :placeholder="inputs.firstName.placeholder"
            :description="inputs.firstName.description"
            @emit-content="emitFirstName"
          />

          <InputName
            :label="inputs.lastName.label"
            :placeholder="inputs.lastName.placeholder"
            :description="inputs.lastName.description"
            @emit-content="emitLastName"
          />

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

          <InputPassword
            :label="inputs.confirmPassword.label"
            :placeholder="inputs.confirmPassword.placeholder"
            :description="inputs.confirmPassword.description"
            @emit-content="emitConfirmPassword"
          />

          <InputSubmit
            :label="inputs.submit.placeholder"
            :is-disabled="submitForm"
          />
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
.form-login {
  z-index: 1;
  display: grid;
  width: 100%;
  gap: 1.4rem;
}

@media (max-width: 780px) {
}
</style>
