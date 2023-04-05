<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutInfoComponent",
  props: {
    title: String,
    content: String,
    credits: Object,
  },
});
</script>

<template>
  <div class="container-article">
    <div>
      <h3 class="title-article">{{ title }}</h3>

      <p class="content-article">{{ content }}</p>

      <div class="credits-article" v-show="credits">
        <a v-for="author in credits" :key="author?.name" :href="author?.link">
          {{ author.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-article {
  z-index: 1;
  display: grid;
  gap: 20px;
  width: 100%;
  min-height: 150px;
  border-radius: 0.5rem;
}
.container-article div {
  padding: 10px;
}
.title-article {
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1rem;
}
.content-article {
  padding: 10px;
  font-size: 14px;
  word-break: keep-all;
  text-indent: 10px;
  text-align: justify;
}
.credits-article {
  display: flex;
  max-width: 100%;
  height: auto;
  gap: 10px;
  justify-content: space-around;
}
.credits-article a {
  color: white;
}
.credits-article a:hover {
  color: burlywood;
}
@media (max-width: 780px) {
  .credits-article {
    display: grid;
  }
}
</style>
