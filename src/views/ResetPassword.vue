<script lang="ts">
import { defineComponent } from "vue";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import SetupPassword from "setup/page.reset-password.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/alert-message.vue";
import BannerTitle from "comp/global/composition/banner-title.vue";
import BannerSprites from "comp/global/composition/banner-sprites.vue";
import InputPassword from "comp/global/input/input-password.vue";
import InputSubmit from "comp/global/input/input-submit.vue";

const Setup = SetupPassword[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].resetPassword;

export default defineComponent({
  name: "ResetPasswordView",
  components: {
    AlertMessage,
    BannerTitle,
    BannerSprites,
    InputPassword,
    InputSubmit,
  },
  beforeRouteEnter(to, from, next) {
    const { token } = to.params;

    String(token).length > 110 ? next() : next({ path: "/" });
  },
  computed: {
    title() {
      return Setup.title;
    },
    inputs() {
      const { password, confirmPassword, submit } = Setup.form;
      return { password, confirmPassword, submit };
    },
  },
  data() {
    return {
      alertMessage: "",
      submitForm: false,
      redirectTo: "/auth/login",

      form: { password: "", confirmPassword: "" },
    };
  },
  methods: {
    async updatePassword() {
      if (this.checkPassword()) {
        const { token } = this.$route.params;
        const { status } = await PasswordService.reset(
          this.form,
          String(token)
        );

        this.alertMessage = status === 204 ? success : error;

        setTimeout(async () => {
          status === 204 ? this.redirectAfterLoad() : (this.submitForm = false);
        }, 2500);
      } else {
        this.submitForm = !this.submitForm;
        this.alertMessage = this.inputs.confirmPassword.message;
      }
    },

    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
    },
    checkPassword() {
      return this.form.confirmPassword === this.form.password;
    },
    receivePassword(password: string) {
      this.form.password = password;
    },
    receiveConfirmPassword(password: string) {
      this.form.confirmPassword = password;
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <BannerTitle :title="title" />

  <BannerSprites :sprite-left="'thief'" :sprite-right="'thief'" />

  <div class="main-background">
    <div class="main-container">
      <div class="background">
        <form
          class="form-login"
          @submit.prevent="updatePassword"
          @submit="submitForm = !submitForm"
        >
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

          <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
        </form>
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
