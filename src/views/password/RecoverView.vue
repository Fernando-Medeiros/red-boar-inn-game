<script setup lang="ts">
import { ref, defineExpose, reactive } from "vue";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import SetupPassword from "setup/page.recover-password.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputEmail from "comp/global/inputs/InputEmail.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import router from "router/index";

const Setup = SetupPassword[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].recoverPassword;

const title = Setup.title;
const inputs = { ...Setup.form };

const alertMessage = ref("");
defineExpose({ alertMessage });

const submitForm = ref(false);
const redirectTo = ref("/auth/login");
const form = reactive({ email: "" });

async function checkCustomer() {
  const { statusCode } = await PasswordService.recover(form);

  alertMessage.value = statusCode === 200 ? success : error;

  setTimeout(async () => {
    statusCode === 200
      ? router.push({ path: redirectTo.value })
      : (submitForm.value = !submitForm.value);
  }, 2500);
}
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
          @submit.prevent="checkCustomer"
          @submit="submitForm = !submitForm"
          autocomplete="on"
        >
          <InputEmail
            :label="inputs.email.label"
            :placeholder="inputs.email.placeholder"
            :description="inputs.email.description"
            @emit-content="(email) => (form.email = email)"
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
