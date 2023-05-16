<script setup lang="ts">
import { ref } from "vue";
import Helpers from "core/helpers/Helpers";
import SetupFooter from "setup/global.footer.json";
import SetupRoutes from "setup/global.routes.json";

const contacts = ref(SetupFooter.contacts);
const copyright = ref(SetupFooter.info.copyright);
const routes = ref(SetupRoutes[Helpers.translate()].routes);
</script>

<template>
  <footer class="background-footer">
    <div class="main-container">
      <div class="container">
        <div class="routes">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
          >
            {{ route.name }}
          </router-link>
        </div>

        <div class="contact-icons">
          <div v-for="contact in contacts" :key="contact.name">
            <a :href="contact.path" target="_blank">
              <img
                class="image-contact"
                :alt="contact.name"
                :src="require(`assets/icons/${contact.name}.svg`)"
              />
            </a>
          </div>
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
  color: var(--cor-font-color);
  background-color: var(--cor-background-color);
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
  padding-right: 10px;
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

.routes {
  display: grid;
  gap: 0.9rem;
  margin: 5px;
}
.routes a {
  color: var(--cor-font-color);
  text-decoration: none;
}
.routes a:hover {
  text-decoration: underline 2px;
  transition: all 1s;
}

.image-contact {
  width: 2rem;
  height: 2rem;
}
</style>
