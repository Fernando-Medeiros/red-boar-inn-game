<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "./core/storage/session.storage";
import Header from "comp/global/header/header.main.comp.vue";
import Footer from "comp/global/footer/footer.main.comp.vue";
import HeaderGame from "comp/global/header-game/header-game.comp.vue";

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
  <router-view class="view-container" />
  <Footer />
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
