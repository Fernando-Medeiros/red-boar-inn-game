<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AboutOverview",
  props: {
    title: { type: String, required: true },
    content: { type: Array as PropType<string[]>, required: true },
    credits: { type: Object, required: false },
  },
});
</script>

<template>
  <div class="container">
    <h3 class="title">{{ title }}</h3>

    <span class="content">
      <p v-for="paragraph in content" :key="paragraph">
        {{ paragraph }}
      </p>
    </span>

    <div class="credits" v-if="credits">
      <a v-for="author in credits" :key="author?.name" :href="author?.link">
        {{ author.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-block: 2rem;
  padding-inline: 5rem;
}
.title {
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1rem;
}
.content {
  display: grid;
  gap: 10px;
  padding: 10px;
}
.credits {
  display: flex;
  max-width: 100%;
  height: auto;
  gap: 10px;
  justify-content: space-around;
}
.credits a {
  color: white;
}
.credits a:hover {
  color: burlywood;
}
@media (max-width: 780px) {
  .container {
    padding: 10px;
    padding-inline: 0;
  }
  .content {
    font-size: 14px;
  }
  .credits {
    display: grid;
  }
}
</style>
