<script lang="ts">
import { defineComponent, PropType } from "vue";
import ContactIconComp from "./footer.contact-icon.comp.vue";
import RoutesComp from "./footer.routes.comp.vue";

export default defineComponent({
  name: "FooterMainComponent",
  components: { ContactIconComp, RoutesComp },
  props: {
    routes: {
      type: Array as PropType<{ path: string; name: string }[]>,
      required: true,
    },
  },
  data() {
    return {
      contact: {
        github: "https://github.com/Fernando-Medeiros",
        linkedin: "https://www.linkedin.com/in/fernando-de-alvarenga-medeiros",
      },
      info: {
        copyright: "Red-Boar-Inn - 2023",
      },
    };
  },
});
</script>

<template>
  <footer class="footer-background">
    <div class="main-container">
      <div class="footer-container">
        <RoutesComp :routes="routes" :github="contact.github" />

        <div class="contact">
          <ContactIconComp :icon-name="'github'" :link="contact.github" />
          <ContactIconComp :icon-name="'linkedin'" :link="contact.linkedin" />
        </div>
      </div>
    </div>

    <p class="copy" translate="no">
      <router-link to="/">
        <img class="image-logo" src="@/assets/logo.png" alt="logo" />
      </router-link>

      {{ info.copyright }}
    </p>
  </footer>
</template>

<style scoped>
.footer-background {
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
.contact {
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
