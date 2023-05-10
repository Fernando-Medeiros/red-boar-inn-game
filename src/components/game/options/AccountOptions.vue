<script setup lang="ts">
import { reactive, ref } from "vue";
import { Helpers } from "core/helpers/helpers";
import useUpdateFullName from "composable/useUpdateFullName";
import useUpdateEmail from "composable/useUpdateEmail";
import useUpdatePassword from "composable/useUpdatePassword";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const [
  { form: inputs },
  {
    account: { success: accSuccess },
    resetPassword: { success: pwdSuccess },
  },
  submitNameForm,
  submitEmailForm,
  submitPasswordForm,
  form,
] = [
  SetupOptions[Helpers.translate()].account,
  SetupResponses[Helpers.translate()],

  ref(false),
  ref(false),
  ref(false),

  reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }),
];

async function updateFullName() {
  await useUpdateFullName(form, accSuccess);
  submitNameForm.value = false;
}

async function updateEmail() {
  await useUpdateEmail(form, accSuccess);
  submitEmailForm.value = false;
}

async function updatePassword() {
  await useUpdatePassword(form, pwdSuccess);
  submitPasswordForm.value = false;
}
</script>

<template>
  <div>
    <form
      class="form-container"
      @submit.prevent="updateFullName"
      @submit="submitNameForm = !submitNameForm"
    >
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
      <InputSubmit
        class="InputSubmit"
        :label="inputs.submit.label"
        :is-disabled="submitNameForm"
      />
    </form>

    <form
      class="form-container"
      @submit.prevent="updateEmail"
      @submit="submitEmailForm = !submitEmailForm"
    >
      <InputComp
        :type="'email'"
        :regex="'email'"
        :label="inputs.email.label"
        :placeholder="inputs.email.placeholder"
        :description="inputs.email.description"
        @emit-content="(email) => (form.email = email)"
      />
      <InputSubmit
        class="InputSubmit"
        :label="inputs.submit.label"
        :is-disabled="submitEmailForm"
      />
    </form>

    <form
      class="form-container"
      @submit.prevent="updatePassword"
      @submit="submitPasswordForm = !submitPasswordForm"
    >
      <InputComp
        :type="'password'"
        :regex="'password'"
        :label="inputs.password.label"
        :placeholder="inputs.password.placeholder"
        :description="inputs.password.description"
        @emit-content="(password) => (form.password = password)"
      />
      <InputSubmit
        :label="inputs.submit.label"
        :is-disabled="submitPasswordForm"
      />
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  gap: 2rem;
  margin-top: 3rem;
}
</style>
