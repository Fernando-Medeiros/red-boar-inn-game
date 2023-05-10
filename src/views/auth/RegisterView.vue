<script setup lang="ts">
import { ref, reactive } from "vue";
import { Helpers } from "core/helpers/helpers";
import AlertMessage from "core/helpers/alert-message";
import useRegister from "composable/useRegister";
import SetupRegister from "setup/page.register.json";
import SetupResponses from "setup/global.responses.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const [{ title, form: inputs }, { success }, submitForm, form] = [
  SetupRegister[Helpers.translate()],
  SetupResponses[Helpers.translate()].register,
  ref(false),
  reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }),
];

async function register() {
  if (form.confirmPassword === form.password) {
    submitForm.value = true;

    await useRegister(form, success);
  } else {
    AlertMessage.alertWithTimer(inputs.confirmPassword.message, 400);
  }

  submitForm.value = false;
}
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'peasant'" :sprite-right="'peasant'" />

    <div class="main-background">
      <div class="main-container">
        <div class="background">
          <form class="form-login" @submit.prevent="register">
            <InputComp
              :type="'name'"
              :regex="'name'"
              :label="inputs.firstName.label"
              :placeholder="inputs.firstName.placeholder"
              :description="inputs.firstName.description"
              @emit-content="(name) => (form.firstName = name)"
            />

            <InputComp
              :type="'name'"
              :regex="'name'"
              :label="inputs.lastName.label"
              :placeholder="inputs.lastName.placeholder"
              :description="inputs.lastName.description"
              @emit-content="(name) => (form.lastName = name)"
            />

            <InputComp
              :type="'email'"
              :regex="'email'"
              :label="inputs.email.label"
              :placeholder="inputs.email.placeholder"
              :description="inputs.email.description"
              @emit-content="(email) => (form.email = email)"
            />

            <InputComp
              :type="'password'"
              :regex="'password'"
              :label="inputs.password.label"
              :placeholder="inputs.password.placeholder"
              :description="inputs.password.description"
              @emit-content="(password) => (form.password = password)"
            />

            <InputComp
              :type="'password'"
              :regex="'password'"
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
