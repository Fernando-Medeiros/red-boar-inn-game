<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupHeader from "setup/global.header.json";
import SetupRoutes from "setup/global.routes.json";
import ThemeButton from "../button/theme-button.vue";
import LanguageButton from "../button/language-button.vue";

const Setup = SetupHeader[Helpers.translate()];

export default defineComponent({
  name: "HeaderComponent",
  components: { ThemeButton, LanguageButton },
  computed: {
    buttons() {
      const { login, register } = Setup;
      return { login, register };
    },
    routes() {
      return SetupRoutes[Helpers.translate()].routes;
    },
  },
});
</script>

<template>
  <header class="header-background">
    <div class="main-container">
      <nav class="header-container">
        <div class="routes">
          <router-link to="/" style="margin-left: 0px">
            <img class="logo" alt="logo" :src="require('assets/logo.svg')" />
          </router-link>

          <nav class="mobile-box-routes">
            <router-link
              v-for="route in routes"
              :key="route.path"
              :to="route.path"
            >
              {{ route.name }}
            </router-link>
          </nav>

          <LanguageButton />
          <ThemeButton />
        </div>

        <nav class="routes">
          <router-link
            v-for="button in buttons"
            :key="button.label"
            :to="button.path"
          >
            {{ button.label }}
          </router-link>
        </nav>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-background {
  width: 100%;
  height: auto;
  background-color: var(--cor-background-color);
}
.header-container {
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 2rem;
  height: 2rem;
  filter: saturate(0.9);
  transition: all 1s;
}
.routes {
  width: auto;
  display: flex;
  margin: 5px;
  align-items: center;
}
.routes a {
  color: var(--cor-font-color);
  text-decoration: none;
  margin-left: 2.5rem;
}
.routes a:hover {
  text-decoration: underline 2px;
  transition: all 1s;
}
.routes a.router-link-exact-active {
  text-decoration: underline 4px;
  text-decoration-color: burlywood;
}

@media (max-width: 780px) {
  .routes a {
    margin-left: 1.5rem;
  }
}
@media (max-width: 480px) {
  .mobile-box-routes {
    display: none;
  }
}
</style>
