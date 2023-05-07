<script setup lang="ts">
import { onBeforeMount, defineExpose, ref, reactive } from "vue";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import { useRoute } from "vue-router";
import router from "router/index";
import SetupPassword from "setup/page.reset-password.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputPassword from "comp/global/inputs/InputPassword.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const Setup = SetupPassword[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].resetPassword;

onBeforeMount(() => {
  const { token } = useRoute().params;
  if (String(token).length < 110) return router.push({ path: "/" });
});

const title = Setup.title;
const inputs = { ...Setup.form };

const alertMessage = ref("");
defineExpose({ alertMessage });

const submitForm = ref(false);
const redirectTo = ref("/auth/login");
const form = reactive({ password: "", confirmPassword: "" });

async function updatePassword() {
  if (checkPassword()) {
    const { token } = useRoute().params;
    const { statusCode } = await PasswordService.reset(form, String(token));

    alertMessage.value = statusCode === 204 ? success : error;

    setTimeout(async () => {
      statusCode === 204
        ? router.push({ path: redirectTo.value })
        : (submitForm.value = false);
    }, 2500);
  } else {
    submitForm.value = !submitForm.value;

    alertMessage.value = inputs.confirmPassword.message;
  }
}

function checkPassword() {
  return form.confirmPassword === form.password;
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
          @submit.prevent="updatePassword"
          @submit="submitForm = !submitForm"
        >
          <InputPassword
            :label="inputs.password.label"
            :placeholder="inputs.password.placeholder"
            :description="inputs.password.description"
            @emit-content="(password) => (form.password = password)"
          />

          <InputPassword
            :label="inputs.confirmPassword.label"
            :placeholder="inputs.confirmPassword.placeholder"
            :description="inputs.confirmPassword.description"
            @emit-content="(password) => (form.confirmPassword = password)"
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
