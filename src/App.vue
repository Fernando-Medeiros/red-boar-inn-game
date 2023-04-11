<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/language";
import SetupHeaderFooter from "setup/header-footer.json";
import SetupRoutes from "setup/routes.json";

import Header from "comp/global/header/header.main.comp.vue";
import Footer from "comp/global/footer/footer.main.comp.vue";

export default defineComponent({
  name: "APP",
  components: { Header, Footer },
  data() {
    return {
      loginPath: "/login",
      buttonLoginLabel: "",
      routes: [{ path: "", name: "" }],
    };
  },
  created() {
    const setupHeader = SetupHeaderFooter.header[LocalStorage.getLanguage()];
    const setupRoutes = SetupRoutes[LocalStorage.getLanguage()];

    this.routes = setupRoutes.routes;
    this.buttonLoginLabel = setupHeader.buttonLoginLabel;
  },
});
</script>

<template>
  <Header
    :routes="routes"
    :login-path="loginPath"
    :button-label="buttonLoginLabel"
  />
  <div class="view-container">
    <router-view />
  </div>
  <Footer :routes="routes" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Public Sans", sans-serif;
}
html {
  background-color: #222222;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  color: #e8e8e8;
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
}
.main-container {
  max-width: 1000px;
  margin: auto;
  width: 100%;
}
.view-container {
  margin-bottom: 20px;
}
</style>
