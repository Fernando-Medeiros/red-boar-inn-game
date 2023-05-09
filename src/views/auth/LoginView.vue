<script setup lang="ts">
import { ref, defineExpose, reactive } from "vue";
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
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import InputCheckBox from "comp/global/inputs/InputCheckBox.vue";

const Setup = SetupLogin[Helpers.translate()];

const title = Helpers.random(Setup.titleTips);
const inputs = { ...Setup.form };

const alertMessage = ref("");
defineExpose({ alertMessage });

const submitForm = ref(false);
const redirectTo = ref("/character/profile");

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

async function login() {
  await SessionService.login({ ...form }).then(
    async ({ message, statusCode, pubId, access, refresh, type }) => {
      alertMessage.value = message || "";

      if (statusCode === 200) {
        LocalSession.set({ pubId, access, refresh, type });

        await CharacterService.get().then(async (pubId) => {
          if (pubId) redirectAfterLoad();

          await CharacterDependencies.create(), redirectAfterLoad();
        });
      }

      submitForm.value = !submitForm.value;
    }
  );
}

function redirectAfterLoad() {
  router.push({ path: redirectTo.value });
  location.reload();
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

            <div class="form-options">
              <InputCheckBox
                :label="inputs.checkbox.label"
                @click="() => (form.remember = !form.remember)"
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
