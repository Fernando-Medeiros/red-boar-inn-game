<script setup lang="ts">
import { ref } from "vue";
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

const title = ref(Setup.title);
const inputs = ref({ ...Setup.form });

const alertMessage = ref("");
const submitForm = ref(false);
const redirectTo = ref("/auth/login");
const form = ref({ email: "" });

async function checkCustomer() {
  const { status } = await PasswordService.recover(form.value);

  alertMessage.value = status === 200 ? success : error;

  setTimeout(async () => {
    status === 200
      ? router.push({ path: redirectTo.value })
      : (submitForm.value = !submitForm.value);
  }, 2500);
}

function receiveEmail(email: string) {
  form.value.email = email;
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
            @emit-content="receiveEmail"
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
