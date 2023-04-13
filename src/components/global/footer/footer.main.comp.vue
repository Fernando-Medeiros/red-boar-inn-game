<script lang="ts">
import { defineComponent, PropType } from "vue";
import IconContact from "./footer.contact-icon.comp.vue";
import Routes from "./footer.routes.comp.vue";

export default defineComponent({
  name: "FooterComponent",
  components: { IconContact, Routes },
  props: {
    routes: {
      type: Array as PropType<{ path: string; name: string }[]>,
      required: true,
    },
    contacts: {
      type: Array as PropType<{ path: string; name: string }[]>,
      required: true,
    },
    copyright: { type: String, required: true },
  },
});
</script>

<template>
  <footer class="background-footer">
    <div class="main-container">
      <div class="footer-container">
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
        <img class="image-logo" :src="require('assets/logo.png')" alt="logo" />
      </router-link>

      {{ copyright }}
    </p>
  </footer>
</template>

<style scoped>
.background-footer {
  width: 100%;
  background-color: #222222;
}
.footer-container {
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
