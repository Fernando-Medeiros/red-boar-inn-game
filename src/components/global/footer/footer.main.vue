<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupFooter from "setup/global.footer.json";
import SetupRoutes from "setup/global.routes.json";
import IconContact from "./contact-icon.vue";
import Routes from "./routes.vue";

export default defineComponent({
  name: "FooterComponent",
  components: { IconContact, Routes },
  computed: {
    contacts() {
      return SetupFooter.contacts;
    },
    copyright() {
      return SetupFooter.info.copyright;
    },
    routes() {
      return SetupRoutes[Helpers.translate()].routes;
    },
  },
});
</script>

<template>
  <footer class="background-footer">
    <div class="main-container">
      <div class="container">
        <Routes :routes="routes" />

        <div class="contact-icons">
          <IconContact
            v-for="contact in contacts"
            :key="contact.name"
            :icon-name="contact.name"
            :link="contact.path"
          />
        </div>
      </div>
    </div>

    <p class="copy" translate="no">
      <router-link to="/">
        <img class="image-logo" :src="require('assets/logo.svg')" alt="logo" />
      </router-link>

      <span>
        {{ copyright }}
      </span>
    </p>
  </footer>
</template>

<style scoped>
.background-footer {
  width: 100%;
  background-color: #222222;
}
.container {
  display: flex;
  max-width: 100%;
  padding: 1rem;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
}
.image-logo {
  width: 1.2rem;
  height: 1.2rem;
}
.contact-icons {
  display: grid;
  gap: 0.9rem;
}
.copy {
  width: 100%;
  padding: 1rem 0;
  text-align: center;
}
@media (max-width: 780px) {
}
</style>
