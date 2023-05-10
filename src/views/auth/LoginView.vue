<script setup lang="ts">
import { ref, reactive } from "vue";
import { SessionStorage } from "core/storage/session-storage";
import { SessionService } from "core/services/session-service";
import { CharacterService } from "core/services/character-service";
import { CharacterDependencies } from "core/services/helpers/character-dependencies";
import { Helpers } from "core/helpers/helpers";
import AlertMessage from "core/helpers/alert-message";
import SetupLogin from "setup/page.login.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";
import InputComp from "comp/global/inputs/InputComp.vue";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import InputCheckBox from "comp/global/inputs/InputCheckBox.vue";
import router from "router/index";

const [{ titleTips: tips, form: inputs }, submitForm, form] = [
  SetupLogin[Helpers.translate()],

  ref(false),

  reactive({
    email: "",
    password: "",
    remember: false,
  }),
];

async function login() {
  await SessionService.login({ ...form }).then(
    async ({ message, statusCode, pubId, access, refresh, type }) => {
      AlertMessage.alertWithTimer(message, statusCode);

      if (statusCode === 200) {
        SessionStorage.set({ pubId, access, refresh, type });

        await CharacterService.get().then(async (resp) => {
          if (!resp?.pubId) await CharacterDependencies.create();

          router.push({ path: "/character/profile" });
          location.reload();
        });
      }

      submitForm.value = false;
    }
  );
}
</script>

<template>
  <div>
    <BannerTitle :title="Helpers.random(tips)" />

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
