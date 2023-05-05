<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ title: string }>();
</script>

<template>
  <div class="container">
    <div class="main-container">
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: var(--cor-background-linear-gradient),
    url("assets/pictures/img4.webp");
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
