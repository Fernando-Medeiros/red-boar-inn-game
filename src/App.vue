<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/global/header/header.main.comp.vue";
import FooterComponent from "./components/global/footer/footer.main.comp.vue";

export default defineComponent({
  name: "APP",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      loginPath: "/acessar",
      routes: [
        { path: "/atualizacoes", name: "Atualizações" },
        { path: "/sobre", name: "Sobre" },
      ],
    };
  },
});
</script>

<template>
  <HeaderComponent :routes="routes" :login-path="loginPath" />
  <router-view />
  <FooterComponent :routes="routes" />
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
  color: #e8e8e8;
}
.main-container {
  margin: auto;
  max-width: 1000px;
}
</style>
