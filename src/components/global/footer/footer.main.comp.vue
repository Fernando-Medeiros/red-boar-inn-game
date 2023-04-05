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

    <p class="copy" translate="no">
      <router-link to="/">
        <img class="image-logo" src="@/assets/logo.png" alt="logo" />
      </router-link>

      Red-Boar-Inn - 2023
    </p>
  </footer>
</template>

<style scoped>
.background {
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
  padding: 1rem 0;
  text-align: center;
}
@media (max-width: 780px) {
}
</style>
