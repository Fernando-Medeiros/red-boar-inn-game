<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "./core/storage/session.storage";
import Header from "comp/global/header/header.main.vue";
import Footer from "comp/global/footer/footer.main.vue";
import HeaderGame from "comp/global/header-game/header-game.vue";

export default defineComponent({
  name: "MainComponent",
  components: { Header, Footer, HeaderGame },
  computed: {
    isAuthenticated() {
      return LocalSession.isAuthenticated();
    },
  },
});
</script>

<template>
  <Header v-if="!isAuthenticated" />
  <HeaderGame v-if="isAuthenticated" />

  <main class="view-container">
    <router-view />
  </main>
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Public Sans", sans-serif;
}

html {
  background-color: var(--cor-background-color);
}

:root {
  --cor-font-color: #e8e8e8;
  --cor-background-color: #222222;
  --cor-background-linear-gradient: linear-gradient(#282828, #323232c0);
}

[color-scheme="light"] {
  --cor-font-color: black;
  --cor-background-color: #e8e8e8;
  --cor-background-linear-gradient: linear-gradient(#81818185, #32323262);
}

[color-scheme="dark"] {
  --cor-font-color: #e8e8e8;
  --cor-background-color: #222222;
  --cor-background-linear-gradient: linear-gradient(#282828c9, #323232c0);
}

#app {
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("assets/pictures/img2.webp");
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

.main-background {
  margin-top: 1rem;
  padding: 1rem 10px;
  border-radius: 5px;
  background: var(--cor-background-linear-gradient);
}

.view-container {
  margin-bottom: 20px;
}
</style>
