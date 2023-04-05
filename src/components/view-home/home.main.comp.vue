<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import HomeButtonComponent from "./home.button.comp.vue";

export default defineComponent({
  name: "HomeMainComponent",
  components: { SpriteComponent, HomeButtonComponent },
  data() {
    return {
      title: "Comece a explorar um mundo de masmorras e aventuras!",
    };
  },
});
</script>

<template>
  <body class="background">
    <div class="main-container">
      <div class="container">
        <h1>{{ title }}</h1>

        <div class="background-banner">
          <div class="container-banner">
            <SpriteComponent
              :rotate-y="true"
              :sprite-name="'mage'"
              :sprite-gender="'woman'"
            />

            <HomeButtonComponent />

            <SpriteComponent
              :rotate-y="false"
              :sprite-name="'mage'"
              :sprite-gender="'man'"
            />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  min-height: 600px;
}
.container h1 {
  margin: auto;
  font-size: 32px;
  font-weight: 400;
  color: white;
  text-align: center;
}
.background {
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("@/assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.background-banner {
  position: absolute;
  width: 100%;
  margin-top: 9rem;
  justify-self: center;
  background-color: #222222;
}
.container-banner {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
}
@media (max-width: 780px) {
  .container {
    grid-template-rows: 0.4fr 1fr;
    min-height: 400px;
  }
  .container h1 {
    font-size: 24px;
  }
  .background {
    background-position: center;
  }
  .container-banner {
    height: 100%;
    justify-content: space-evenly;
  }
}
</style>
