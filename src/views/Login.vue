<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "core/storage/session.storage";
import { SessionService } from "core/api/session-service";
import { CharacterService } from "core/api/character-service";
import { CharacterDependencies } from "core/api/helpers/character-dependencies";
import { Helpers } from "core/helpers/functions-helpers";
import SetupLogin from "setup/page.login.json";
import BannerTitle from "comp/global/composition/banner-title.comp.vue";
import BannerSprites from "comp/global/composition/banner-sprites.comp.vue";
import InputEmail from "comp/global/input/input-email.comp.vue";
import InputPassword from "comp/global/input/input-password.comp.vue";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import InputCheckBox from "comp/global/input/input-checkbox.comp.vue";

export default defineComponent({
  name: "LoginView",
  components: {
    BannerTitle,
    BannerSprites,
    InputEmail,
    InputPassword,
    InputSubmit,
    InputCheckBox,
  },
  data() {
    return {
      title: "",
      alertMessage: "",
      submitForm: false,
      redirectTo: "/character/profile",

      form: {
        email: "",
        password: "",
        remember: false,
      },
      banner: {
        spriteLeft: {
          name: "peasant",
          gender: "woman",
          rotateY: true,
        },
        spriteRight: {
          name: "peasant",
          gender: "man",
          rotateY: false,
        },
      },
      inputs: {
        ...SetupLogin[Helpers.getLanguage()].form,
      },
    };
  },
  mounted() {
    const { titleTips } = SetupLogin[Helpers.getLanguage()];

    this.title = Helpers.random(titleTips);
  },
  methods: {
    async login() {
      this.blockInputSubmit();

      const { message, pubId, access, refresh, type } =
        await SessionService.login(this.form);

      message
        ? (this.alertMessage = message)
        : [
            LocalSession.set({ pubId, access, refresh, type }),

            (await CharacterService.get())?.pubId
              ? [await CharacterDependencies.load()]
              : [
                  await CharacterDependencies.create(),
                  await CharacterDependencies.load(),
                ],

            this.redirectAfterLoad(),
          ];
      this.blockInputSubmit();
    },

    blockInputSubmit() {
      this.submitForm = !this.submitForm;
    },
    redirectAfterLoad() {
      this.$router.push({ path: this.redirectTo });
      location.reload();
    },

    emitEmail(value: string) {
      this.form.email = value;
    },
    emitPassword(value: string) {
      this.form.password = value;
    },
    clickRemember() {
      this.form.remember = !this.form.remember;
    },
  },
});
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites
      :sprite-left="banner.spriteLeft"
      :sprite-right="banner.spriteRight"
    />

    <div class="main-container">
      <div class="background">
        <span class="alert-message">
          <p>{{ alertMessage }}</p>
        </span>

        <form class="form-login" @submit.prevent="login">
          <InputEmail
            :label="inputs.email.label"
            :placeholder="inputs.email.placeholder"
            :description="inputs.email.description"
            @emit-content="emitEmail"
          />

          <InputPassword
            :label="inputs.password.label"
            :placeholder="inputs.password.placeholder"
            :description="inputs.password.description"
            @emit-content="emitPassword"
          />

          <div class="form-options">
            <InputCheckBox
              :label="inputs.checkbox.label"
              @click="clickRemember"
            />
            <router-link :to="inputs.recover.route">
              {{ inputs.recover.label }}
            </router-link>
          </div>

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
  background: linear-gradient(#282828, #323232c0);
}
.alert-message {
  color: tomato;
  padding-block: 1rem;
  text-align: center;
}
.form-login {
  z-index: 1;
  display: grid;
  justify-content: center;
  gap: 2rem;
}
.form-options {
  display: flex;
  justify-content: space-between;
}
.form-options a {
  color: white;
  text-decoration: none;
}
.form-options a:hover {
  color: burlywood;
}
@media (max-width: 780px) {
}
</style>
