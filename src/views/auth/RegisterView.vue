<script setup lang="ts">
import { ref, defineExpose, reactive } from "vue";
import { AccountService } from "core/services/account-service";
import { Helpers } from "core/helpers/helpers";
import router from "router/index";
import SetupRegister from "setup/page.register.json";
import SetupResponses from "setup/global.responses.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputName from "comp/global/inputs/InputName.vue";
import InputEmail from "comp/global/inputs/InputEmail.vue";
import InputPassword from "comp/global/inputs/InputPassword.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const Setup = SetupRegister[Helpers.translate()];

let { success, error } = SetupResponses[Helpers.translate()].register;

const alertMessage = ref("");
defineExpose({ alertMessage });

const title = Setup.title;
const inputs = { ...Setup.form };

const submitForm = ref(false);
const redirectTo = ref("/auth/login");
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

async function createAccount() {
  checkPassword()
    ? (error = (await AccountService.create(form))?.message || "")
    : (error = inputs.confirmPassword.message);

  alertMessage.value = error || success;

  setTimeout(() => {
    error
      ? (submitForm.value = false)
      : router.push({ path: redirectTo.value });
  }, 2500);
}

function checkPassword() {
  return form.confirmPassword === form.password;
}
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
              @emit-content="(name) => (form.firstName = name)"
            />

            <InputName
              :label="inputs.lastName.label"
              :placeholder="inputs.lastName.placeholder"
              :description="inputs.lastName.description"
              @emit-content="(name) => (form.lastName = name)"
            />

            <InputEmail
              :label="inputs.email.label"
              :placeholder="inputs.email.placeholder"
              :description="inputs.email.description"
              @emit-content="(email) => (form.email = email)"
            />

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
