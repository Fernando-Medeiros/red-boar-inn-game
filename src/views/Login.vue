<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "core/storage/session.storage";
import { SessionService } from "core/services/session-service";
import { CharacterService } from "core/services/character-service";
import { CharacterDependencies } from "core/services/helpers/character-dependencies";
import { Helpers } from "core/helpers/helpers";
import SetupLogin from "setup/page.login.json";
import AlertMessage from "comp/global/helpers/alert-message.vue";
import BannerTitle from "comp/global/composition/banner-title.vue";
import BannerSprites from "comp/global/composition/banner-sprites.vue";
import InputEmail from "comp/global/input/input-email.vue";
import InputPassword from "comp/global/input/input-password.vue";
import InputSubmit from "comp/global/input/input-submit.vue";
import InputCheckBox from "comp/global/input/input-checkbox.vue";

const Setup = SetupLogin[Helpers.translate()];

export default defineComponent({
  name: "LoginView",
  expose: ["alertMessage"],
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputSubmit,
    InputCheckBox,
    AlertMessage,
  },
  computed: {
    title() {
      return Helpers.random(Setup.titleTips);
    },
    inputs() {
      const {
        form: { email, password, checkbox, recover, submit },
      } = Setup;

      return { email, password, checkbox, recover, submit };
    },
  },
  data() {
    return {
      alertMessage: "",
      submitForm: false,
      redirectTo: "/character/profile",

      form: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },
  methods: {
    async login() {
      const { message, status, pubId, access, refresh, type } =
        await SessionService.login(this.form);

      this.alertMessage = message || "";

      if (status === 200) {
        LocalSession.set({ pubId, access, refresh, type });

        (await CharacterService.get())?.pubId
          ? this.redirectAfterLoad()
          : [await CharacterDependencies.create(), this.redirectAfterLoad()];
      }

      this.submitForm = !this.submitForm;
    },
    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
      location.reload();
    },
    receiveEmail(value: string) {
      this.form.email = value;
    },
    receivePassword(value: string) {
      this.form.password = value;
    },
    receiveRemember() {
      this.form.remember = !this.form.remember;
    },
  },
});
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
            @submit.prevent="login"
            @submit="submitForm = !submitForm"
          >
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

            <div class="form-options">
              <InputCheckBox
                :label="inputs.checkbox.label"
                @click="receiveRemember"
              />
              <router-link :to="inputs.recover.route">
                {{ inputs.recover.label }}
              </router-link>
            </div>

            <InputSubmit
              :label="inputs.submit.label"
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
  gap: 2rem;
  justify-content: center;
}
.form-options {
  display: flex;
  justify-content: space-between;
}
.form-options a {
  color: var(--cor-font-color);
  text-decoration: none;
}
.form-options a:hover {
  color: burlywood;
}
</style>
