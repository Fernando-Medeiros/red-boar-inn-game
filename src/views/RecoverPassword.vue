<script lang="ts">
import { defineComponent } from "vue";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import SetupPassword from "setup/page.recover-password.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/alert-message.vue";
import BannerTitle from "comp/global/composition/banner-title.vue";
import BannerSprites from "comp/global/composition/banner-sprites.vue";
import InputEmail from "comp/global/input/input-email.vue";
import InputSubmit from "comp/global/input/input-submit.vue";

const Setup = SetupPassword[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].recoverPassword;

export default defineComponent({
  name: "RecoverPasswordView",
  components: {
    AlertMessage,
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputSubmit,
  },
  computed: {
    title() {
      return Setup.title;
    },
    inputs() {
      const { email, submit } = Setup.form;
      return { email, submit };
    },
  },
  data() {
    return {
      alertMessage: "",
      submitForm: false,
      redirectTo: "/auth/login",

      form: { email: "" },
    };
  },
  methods: {
    async checkCustomer() {
      const { status } = await PasswordService.recover(this.form);

      this.alertMessage = status === 200 ? success : error;

      setTimeout(async () => {
        status === 200
          ? this.redirectAfterLoad()
          : (this.submitForm = !this.submitForm);
      }, 2500);
    },

    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
    },
    receiveEmail(email: string) {
      this.form.email = email;
    },
  },
});
</script>

<template>
  <AlertMessage :message="alertMessage" />

  <BannerTitle :title="title" />

  <BannerSprites :sprite-left="'thief'" :sprite-right="'thief'" />

  <div class="main-container">
    <div class="background">
      <form
        class="form-login"
        @submit.prevent="checkCustomer"
        @submit="submitForm = !submitForm"
        autocomplete="on"
      >
        <InputEmail
          :label="inputs.email.label"
          :placeholder="inputs.email.placeholder"
          :description="inputs.email.description"
          @emit-content="receiveEmail"
        />

        <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
      </form>
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
</style>
