<script setup lang="ts">
import { defineEmits, reactive, ref } from "vue";
import { AccountService } from "core/services/account-service";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";

const Setup = SetupOptions[Helpers.translate()];

const {
  account: { success: accSuccess },
  resetPassword: { success: pwdSuccess },
} = SetupResponses[Helpers.translate()];

const emit = defineEmits(["emitMessage"]);

const inputs = { ...Setup.account.form };

const nameForm = ref(false);
const emailForm = ref(false);
const passwordForm = ref(false);

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

async function updateFullName() {
  const { firstName, lastName } = form;
  const { statusCode, message } = await AccountService.update({
    firstName,
    lastName,
  });

  emit("emitMessage", statusCode === 204 ? accSuccess : message);
  nameForm.value = !nameForm.value;
}

async function updateEmail() {
  const { email } = form;
  const { statusCode, message } = await AccountService.update({
    email,
  });

  emit("emitMessage", statusCode === 204 ? accSuccess : message);
  emailForm.value = !emailForm.value;
}

async function updatePassword() {
  const { password } = form;
  const { statusCode, message } = await PasswordService.update({
    password,
  });

  emit("emitMessage", statusCode === 204 ? pwdSuccess : message);
  passwordForm.value = !passwordForm.value;
}
</script>

<template>
  <div>
    <div>
      <form
        class="form-container"
        @submit.prevent="updateFullName"
        @submit="nameForm = !nameForm"
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
          :is-disabled="nameForm"
        />
      </form>
    </div>

    <div style="margin-top: 3rem">
      <form
        class="form-container"
        @submit.prevent="updateEmail"
        @submit="emailForm = !emailForm"
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
          :is-disabled="emailForm"
        />
      </form>
    </div>

    <div style="margin-top: 3rem">
      <form
        class="form-container"
        @submit.prevent="updatePassword"
        @submit="passwordForm = !passwordForm"
      >
        <InputComp
          :type="'password'"
          :regex="'password'"
          :label="inputs.password.label"
          :placeholder="inputs.password.placeholder"
          :description="inputs.password.description"
          @emit-content="(password) => (form.password = password)"
        />
        <InputSubmit :label="inputs.submit.label" :is-disabled="passwordForm" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  gap: 2rem;
}
</style>
