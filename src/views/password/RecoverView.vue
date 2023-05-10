<script setup lang="ts">
import { ref, reactive } from "vue";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import AlertMessage from "core/helpers/alert-message";
import SetupPassword from "setup/page.recover-password.json";
import SetupResponses from "setup/global.responses.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import router from "router/index";

const [{ title, form: inputs }, { success, error }, submitForm, form] = [
  SetupPassword[Helpers.translate()],

  SetupResponses[Helpers.translate()].recoverPassword,

  ref(false),

  reactive({ email: "" }),
];

async function checkCustomer() {
  const { statusCode } = await PasswordService.recover(form);

  AlertMessage.alertWithTimer(statusCode === 200 ? success : error, statusCode);

  setTimeout(async () => {
    statusCode === 200
      ? router.push({ path: "/auth/login" })
      : (submitForm.value = !submitForm.value);
  }, 1500);
}
</script>

<template>
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
          <InputComp
            :type="'email'"
            :regex="'email'"
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
