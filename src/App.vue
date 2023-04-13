<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import { Session } from "./core/auth/session";

import SetupHeader from "setup/global.header.json";
import SetupFooter from "setup/global.footer.json";
import SetupRoutes from "setup/global.routes.json";

import Header from "comp/global/header/header.main.comp.vue";
import Footer from "comp/global/footer/footer.main.comp.vue";

function getSetup() {
  return LocalStorage.getLanguage();
}

export default defineComponent({
  name: "MainComponent",
  components: { Header, Footer },

  data() {
    return {
      header: {
        loginPath: "/login",
        loginLabel: "",
        isAuthenticated: false,
      },
      footer: {
        copyright: "",
        contacts: [{ path: "", name: "" }],
      },
      routes: [{ path: "", name: "" }],
    };
  },

  created() {
    const setupHeader = SetupHeader[getSetup()];
    const setupFooter = SetupFooter;
    const setupRoutes = SetupRoutes[getSetup()];

    this.routes = setupRoutes.routes;

    this.header.loginLabel = setupHeader.loginLabel;
    this.header.isAuthenticated = Session.isAuthenticated();

    this.footer.copyright = setupFooter.info.copyright;
    this.footer.contacts = setupFooter.contacts;
  },
});
</script>

<template>
  <Header
    v-show="header.isAuthenticated === false"
    :routes="routes"
    :login-path="header.loginPath"
    :button-label="header.loginLabel"
  />

  <div class="view-container">
    <router-view />
  </div>

  <Footer
    :routes="routes"
    :contacts="footer.contacts"
    :copyright="footer.copyright"
  />
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
  color: #e8e8e8;
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("assets/pictures/img2.png");
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
