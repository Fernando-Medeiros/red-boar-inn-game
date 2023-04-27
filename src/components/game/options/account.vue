<script lang="ts">
import { defineComponent } from "vue";
import { AccountService } from "core/services/account-service";
import { PasswordService } from "core/services/password-service";
import { Helpers } from "core/helpers/helpers";
import SetupOptions from "setup/page.options.json";
import SetupResponses from "setup/global.responses.json";
import InputName from "comp/global/input/input-name.vue";
import InputEmail from "comp/global/input/input-email.vue";
import InputPassword from "comp/global/input/input-password.vue";
import InputSubmit from "comp/global/input/input-submit.vue";

const Setup = SetupOptions[Helpers.translate()];

const {
  account: { success: accSuccess },
  resetPassword: { success: pwdSuccess },
} = SetupResponses[Helpers.translate()];

export default defineComponent({
  name: "AccountOptions",
  emits: ["emitMessage"],
  components: {
    InputName,
    InputEmail,
    InputPassword,
    InputSubmit,
  },
  computed: {
    inputs() {
      const { firstName, lastName, email, password, submit } =
        Setup.account.form;

      return { firstName, lastName, email, password, submit };
    },
  },
  data() {
    return {
      nameForm: false,
      emailForm: false,
      passwordForm: false,

      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async updateFullName() {
      const { firstName, lastName } = this.form;
      const { status, message } = await AccountService.update({
        firstName,
        lastName,
      });

      this.$emit("emitMessage", status === 204 ? accSuccess : message);
      this.nameForm = !this.nameForm;
    },

    async updateEmail() {
      const { email } = this.form;
      const { status, message } = await AccountService.update({ email });

      this.$emit("emitMessage", status === 204 ? accSuccess : message);
      this.emailForm = !this.emailForm;
    },

    async updatePassword() {
      const { password } = this.form;
      const { status, message } = await PasswordService.update({ password });

      this.$emit("emitMessage", status === 204 ? pwdSuccess : message);
      this.passwordForm = !this.passwordForm;
    },

    receiveFirstName(name: string) {
      this.form.firstName = name;
    },
    receiveLastName(name: string) {
      this.form.lastName = name;
    },
    receiveEmail(email: string) {
      this.form.email = email;
    },
    receivePassword(password: string) {
      this.form.password = password;
    },
  },
});
</script>

<template>
  <div>
    <div>
      <form
        class="form-container"
        @submit.prevent="updateFullName"
        @submit="nameForm = !nameForm"
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
        <InputSubmit
          class="input-submit"
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
        <InputEmail
          :label="inputs.email.label"
          :placeholder="inputs.email.placeholder"
          :description="inputs.email.description"
          @emit-content="receiveEmail"
        />
        <InputSubmit
          class="input-submit"
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
        <InputPassword
          :label="inputs.password.label"
          :placeholder="inputs.password.placeholder"
          :description="inputs.password.description"
          @emit-content="receivePassword"
        />
        <InputSubmit
          class="input-submit"
          :label="inputs.submit.label"
          :is-disabled="passwordForm"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: grid;
  gap: 1.5rem;
}
.input-submit {
  margin-top: 1rem;
}
</style>
