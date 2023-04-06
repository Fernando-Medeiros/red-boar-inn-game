<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import UpdateBoxComponent from "./update.updatebox.comp.vue";

export default defineComponent({
  name: "UpdateMainComponent",
  components: {
    UpdateBoxComponent,
    SpriteComponent,
  },
  data() {
    return {
      title: "Atualizações",
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
        :sprite-name="'warrior'"
        :sprite-gender="'woman'"
      />

      <UpdateBoxComponent />

      <SpriteComponent
        :rotate-y="false"
        :sprite-name="'warrior'"
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
    background-repeat: no-repeat;
    background-size: auto;
  }
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
}
</style>
