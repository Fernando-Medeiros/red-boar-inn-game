<script setup lang="ts">
import { ref, defineExpose } from "vue";
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

const title = ref(Setup.title);
const inputs = ref({ ...Setup.form });

const submitForm = ref(false);
const redirectTo = ref("/auth/login");
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

async function createAccount() {
  checkPassword()
    ? (error = (await AccountService.create(form.value))?.message || "")
    : (error = inputs.value.confirmPassword.message);

  alertMessage.value = error || success;

  setTimeout(() => {
    error
      ? (submitForm.value = false)
      : router.push({ path: redirectTo.value });
  }, 2500);
}

function checkPassword() {
  return form.value.confirmPassword === form.value.password;
}

function receiveFirstName(value: string) {
  form.value.firstName = value;
}

function receiveLastName(value: string) {
  form.value.lastName = value;
}

function receiveEmail(value: string) {
  form.value.email = value;
}

function receivePassword(value: string) {
  form.value.password = value;
}

function receiveConfirmPassword(value: string) {
  form.value.confirmPassword = value;
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
