<script lang="ts">
import { defineComponent } from "vue";
import { AccountService } from "core/services/account-service";
import { Helpers } from "core/helpers/helpers";
import SetupRegister from "setup/page.register.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/alert-message.vue";
import BannerTitle from "comp/global/composition/banner-title.vue";
import BannerSprites from "comp/global/composition/banner-sprites.vue";
import InputName from "comp/global/input/input-name.vue";
import InputEmail from "comp/global/input/input-email.vue";
import InputPassword from "comp/global/input/input-password.vue";
import InputSubmit from "comp/global/input/input-submit.vue";

const Setup = SetupRegister[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].register;

export default defineComponent({
  name: "RegisterView",
  expose: ["alertMessage"],
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputName,
    InputSubmit,
    AlertMessage,
  },
  computed: {
    title() {
      return Setup.title;
    },
    inputs() {
      const {
        form: { firstName, lastName, email, password, confirmPassword, submit },
      } = Setup;

      return { firstName, lastName, email, password, confirmPassword, submit };
    },
  },
  data() {
    return {
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
    };
  },
  methods: {
    async createAccount() {
      this.checkPassword()
        ? (error = (await AccountService.create(this.form))?.message || "")
        : (error = this.inputs.confirmPassword.message);

      this.alertMessage = error || success;

      setTimeout(() => {
        error ? (this.submitForm = false) : this.redirectAfterLoad();
      }, 2500);
    },

    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
    },
    checkPassword() {
      return this.form.confirmPassword === this.form.password;
    },
    receiveFirstName(value: string) {
      this.form.firstName = value;
    },
    receiveLastName(value: string) {
      this.form.lastName = value;
    },
    receiveEmail(value: string) {
      this.form.email = value;
    },
    receivePassword(value: string) {
      this.form.password = value;
    },
    receiveConfirmPassword(value: string) {
      this.form.confirmPassword = value;
    },
  },
});
</script>

<template>
  <div>
    <AlertMessage :message="alertMessage" />

    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'peasant'" :sprite-right="'peasant'" />

    <div class="main-background">
      <div class="main-container">
        <div class="background">
          <form
            class="form-login"
            @submit.prevent="createAccount"
            @submit="submitForm = true"
          >
            <InputName
              :label="inputs.firstName.label"
              :placeholder="inputs.firstName.placeholder"
              :description="inputs.firstName.description"
              @emit-content="receiveFirstName"
            />

            <InputName
              :label="inputs.lastName.label"
              :placeholder="inputs.lastName.placeholder"
              :description="inputs.lastName.description"
              @emit-content="receiveLastName"
            />

            <InputEmail
              :label="inputs.email.label"
              :placeholder="inputs.email.placeholder"
              :description="inputs.email.description"
              @emit-content="receiveEmail"
            />

            <InputPassword
              :label="inputs.password.label"
              :placeholder="inputs.password.placeholder"
              :description="inputs.password.description"
              @emit-content="receivePassword"
            />

            <InputPassword
              :label="inputs.confirmPassword.label"
              :placeholder="inputs.confirmPassword.placeholder"
              :description="inputs.confirmPassword.description"
              @emit-content="receiveConfirmPassword"
            />

            <InputSubmit
              :label="inputs.submit.placeholder"
              :is-disabled="submitForm"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  padding-block: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  background-color: var(--cor-background-color);
}
.form-login {
  z-index: 1;
  display: grid;
  width: 100%;
  gap: 1.4rem;
}
</style>
