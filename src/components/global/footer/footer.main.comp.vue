<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterMainComponent",
  data() {
    return {
      routes: [
        { path: "/atualizacoes", name: "Atualizações" },
        { path: "/sobre", name: "Sobre" },
      ],
    };
  },
});
</script>

<template>
  <footer class="background">
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

          <a href="https://github.com/Fernando-Medeiros" target="_blank">
            <p>Participe do projeto</p>
          </a>
        </div>

        <router-link to="/">
          <img class="image-logo" src="@/assets/logo.png" alt="logo" />
        </router-link>

        <div class="contact">
          <div>
            <a href="https://github.com/Fernando-Medeiros">
              <img
                class="image-contact"
                src="@/../public/github.png"
                alt="github"
                target="_blank"
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/fernando-de-alvarenga-medeiros/"
            >
              <img
                class="image-contact"
                src="@/../public/linkedin.png"
                alt="linkedin"
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="copy" translate="no">Red-Boar-Inn - 2023</p>
  </footer>
</template>

<style scoped>
.background {
  width: 100%;
  background-color: #222222;
}
.container {
  width: 100%;
  display: grid;
  padding: 0.5rem 0;
  justify-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
}
.image-logo {
  width: 2.5rem;
  height: 2.5rem;
  transition: all 1s;
}
.image-logo:hover {
  transition: all 1s;
  transform: scale(1.1);
}
.routes {
  display: grid;
  gap: 0.9rem;
  margin: 5px;
}
.routes a {
  color: #e8e8e8;
  text-decoration: none;
}
.routes a:hover {
  text-decoration: underline 2px;
  transition: all 1s;
}

.contact {
  display: grid;
  gap: 0.9rem;
}
.image-contact {
  width: 2rem;
  height: 2rem;
}
.copy {
  width: 100%;
  padding: 5px 0;
  text-align: center;
}
@media (max-width: 780px) {
}
</style>
