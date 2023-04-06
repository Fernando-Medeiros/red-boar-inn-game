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
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("@/assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.main-container {
  max-width: 1000px;
  margin: auto;
  width: 100%;
}

@media (max-width: 780px) {
}
</style>
