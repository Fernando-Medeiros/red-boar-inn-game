<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerTitleComponent",
  props: {
    title: { type: String, required: true },
  },
});
</script>

<template>
  <div class="title-container">
    <div class="main-container">
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.title-container {
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
  padding-bottom: 3rem;
  color: white;
}

@media (max-width: 780px) {
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
}
</style>
