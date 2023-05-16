<script setup lang="ts">
import { onBeforeMount, ref, reactive } from "vue";
import Helpers from "core/helpers/Helpers";
import { useRoute } from "vue-router";
import useResetPassword from "composable/useResetPassword";
import SetupPassword from "setup/page.reset-password.json";
import SetupResponses from "setup/global.responses.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import router from "router/index";

onBeforeMount(() => {
  const { token } = useRoute().params;
  if (String(token).length < 110) return router.push({ path: "/" });
});

const [{ title, form: inputs }, { success }, { token }, submitForm, form] = [
  SetupPassword[Helpers.translate()],
  SetupResponses[Helpers.translate()].resetPassword,
  useRoute().params,
  ref(false),
  reactive({ password: "", confirmPassword: "" }),
];

async function reset() {
  if (form.confirmPassword === form.password) {
    submitForm.value = true;

    await useResetPassword(form, String(token), success);
  } else {
    submitForm.value = false;

    Helpers.alertWithTimer(inputs.confirmPassword.message, 400);
  }
}
</script>

<template>
  <BannerTitle :title="title" />

  <BannerSprites :sprite-left="'thief'" :sprite-right="'thief'" />

  <div class="main-background">
    <div class="main-container">
      <div class="background">
        <form class="form-login" @submit.prevent="reset">
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
