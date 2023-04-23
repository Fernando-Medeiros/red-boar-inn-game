<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "./core/storage/session.storage";
import { Helpers } from "core/helpers/functions-helpers";
import SetupHeader from "setup/global.header.json";
import SetupFooter from "setup/global.footer.json";
import SetupRoutes from "setup/global.routes.json";
import SetupHeaderGame from "setup/global.header-game.json";
import Header from "comp/global/header/header.main.comp.vue";
import Footer from "comp/global/footer/footer.main.comp.vue";
import HeaderGame from "comp/global/header-game/header-game.comp.vue";

export default defineComponent({
  name: "MainComponent",
  components: { Header, Footer, HeaderGame },

  computed: {
    routes() {
      return SetupRoutes[Helpers.translate()].routes;
    },
    footer() {
      return {
        copyright: SetupFooter.info.copyright,
        contacts: SetupFooter.contacts,
      };
    },
  },

  data() {
    return {
      isAuthenticated: false,
      header: {
        loginPath: "/auth/login",
        loginLabel: "",
      },
      headerGame: {
        inventory: { gold: "0", jewel: "0" },
        iconsButton: [{ icon: "", label: "", route: "" }],
      },
    };
  },
  created() {
    this.isAuthenticated = LocalSession.isAuthenticated();

    this.isAuthenticated
      ? [this.loadInventory(), this.loadHeaderGame()]
      : [this.loadHeader()];
  },
  methods: {
    loadHeader() {
      const { loginLabel } = SetupHeader[Helpers.translate()];
      this.header.loginLabel = loginLabel;
    },
    loadHeaderGame() {
      const { icons } = SetupHeaderGame[Helpers.translate()];
      this.headerGame.iconsButton = icons;
    },
    loadInventory() {
      Object.assign(this.headerGame.inventory, {
        gold: "0",
        jewel: "0",
      });
    },
  },
});
</script>

<template>
  <Header
    v-if="isAuthenticated === false"
    :routes="routes"
    :login-path="header.loginPath"
    :button-label="header.loginLabel"
  />

  <HeaderGame
    v-if="isAuthenticated"
    :gold="headerGame.inventory.gold"
    :jewel="headerGame.inventory.jewel"
    :icons-button="headerGame.iconsButton"
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

.background-game {
  margin-top: 1rem;
  padding: 1rem 10px;
  border-radius: 5px;
  background: linear-gradient(#282828e1, #323232a1);
}
</style>
