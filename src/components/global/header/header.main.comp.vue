<script lang="ts">
import { defineComponent, PropType } from "vue";
import LanguageButton from "./header.button-language.comp.vue";

export default defineComponent({
  name: "HeaderMainComponent",
  components: { LanguageButton },
  props: {
    loginPath: { type: String, required: true },
    buttonLabel: { type: String, required: true },
    routes: {
      type: Array as PropType<{ path: string; name: string }[]>,
      required: true,
    },
  },
});
</script>

<template>
  <header class="header-background">
    <div class="main-container">
      <nav class="header-container">
        <router-link to="/">
          <img
            class="image-logo"
            :src="require('assets/logo.png')"
            alt="logo"
          />
        </router-link>

        <nav class="header-routes">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            {{ route.name }}
          </router-link>

          <LanguageButton />

          <router-link :to="loginPath">
            <button class="btn-login">
              <p>{{ buttonLabel }}</p>
            </button>
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
  background-color: #222222;
}
.header-container {
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: space-between;
}
.image-logo {
  width: 2.5rem;
  height: 2.5rem;
  transition: all 1s;
  margin: 5px;
}
.image-logo:hover {
  transition: all 1s;
  transform: scale(1.1);
}
.header-routes {
  width: auto;
  display: flex;
  margin: 5px;
  align-items: center;
}
.header-routes a {
  color: #e8e8e8;
  text-decoration: none;
  margin-left: 2.5rem;
}
.header-routes a:hover {
  text-decoration: underline 2px;
  transition: all 1s;
}
.header-routes a.router-link-exact-active {
  color: burlywood;
}
.btn-login {
  height: 32px;
  width: 75px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 1px 10px 1px rgba(255, 190, 64, 0.5);
  border-radius: 4px;
  cursor: pointer;
}
.btn-login p {
  font-size: 14px;
  color: white;
}
.btn-login:hover {
  border: 1px solid white;
}

@media (max-width: 780px) {
  .image-logo {
    width: 2rem;
    height: 2rem;
  }
  .header-routes a {
    margin-left: 1rem;
  }
}
</style>
