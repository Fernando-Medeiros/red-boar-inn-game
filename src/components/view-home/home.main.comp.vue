<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import RegisterButtonComponent from "./home.register-button.comp.vue";

export default defineComponent({
  name: "HomeMainComponent",
  components: { SpriteComponent, RegisterButtonComponent },
  data() {
    return {
      title: "Comece a explorar um mundo de masmorras e aventuras!",
    };
  },
});
</script>

<template>
  <div class="background">
    <h1 class="title">
      {{ title }}
    </h1>

    <span class="background-banner"></span>

    <div class="container-banner main-container">
      <SpriteComponent
        :rotate-y="true"
        :sprite-name="'mage'"
        :sprite-gender="'woman'"
      />

      <RegisterButtonComponent />

      <SpriteComponent
        :rotate-y="false"
        :sprite-name="'mage'"
        :sprite-gender="'man'"
      />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("@/assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
  color: white;
}
.background-banner {
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 220px;
  background-color: #222222;
}
.container-banner {
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: 0.2fr 1fr 0.2fr;
}

@media (max-width: 780px) {
  .background {
    background-position: center;
  }
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
}
</style>
