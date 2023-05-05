<script setup lang="ts">
import { ref } from "vue";
import { LocalSession } from "core/storage/session.storage";
import { SessionService } from "core/services/session-service";
import { CharacterService } from "core/services/character-service";
import { CharacterDependencies } from "core/services/helpers/character-dependencies";
import { Helpers } from "core/helpers/helpers";
import router from "router/index";
import SetupLogin from "setup/page.login.json";
import AlertMessage from "comp/global/helpers/AlertMessage.vue";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputEmail from "comp/global/inputs/InputEmail.vue";
import InputPassword from "comp/global/inputs/InputPassword.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import InputCheckBox from "comp/global/inputs/InputCheckBox.vue";

const Setup = SetupLogin[Helpers.translate()];

const title = ref(Helpers.random(Setup.titleTips));

const inputs = ref({ ...Setup.form });

const alertMessage = ref("");
const submitForm = ref(false);
const redirectTo = ref("/character/profile");

const form = ref({
  email: "",
  password: "",
  remember: false,
});

async function login() {
  const { message, status, pubId, access, refresh, type } =
    await SessionService.login(form.value);

  alertMessage.value = message || "";

  if (status === 200) {
    LocalSession.set({ pubId, access, refresh, type });

    (await CharacterService.get())?.pubId
      ? redirectAfterLoad()
      : [await CharacterDependencies.create(), redirectAfterLoad()];
  }

  submitForm.value = !submitForm.value;
}

function redirectAfterLoad() {
  router.push({ path: redirectTo.value });
  location.reload();
}

function receiveEmail(value: string) {
  form.value.email = value;
}

function receivePassword(value: string) {
  form.value.password = value;
}

function receiveRemember() {
  form.value.remember = !form.value.remember;
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
