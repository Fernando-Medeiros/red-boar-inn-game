<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PreviewComponent",
  props: {
    title: { type: String, required: true },
    content: { type: Array as PropType<string[]>, required: true },
    image: { type: String, required: true },
  },
});
</script>

<template>
  <div class="container">
    <div class="content">
      <p class="title">{{ title }}</p>
      <p v-for="paragraph in content" :key="paragraph">
        <br />
        <br />
        {{ paragraph }}
      </p>
    </div>

    <div>
      <img
        class="template-image"
        :alt="image"
        :src="require('assets/templates/' + image + '.png')"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-block: 10px;
  margin-block: 10px;

  justify-items: center;
  border-radius: 1rem;
  transition: all 1s;
  background: linear-gradient(#81818185, #32323262);
}
.container:hover {
  transition: all 1s;
  background: linear-gradient(#7e7e7e9f, #32323262);
}
.title {
  font-size: 2rem;
  text-align: center;
}
.content {
  word-break: keep-all;
  padding-inline: 2rem;
}

.template-image {
  border-radius: 1.5rem;
  height: 30rem;
  transition: all 1s;
}
.template-image:hover {
  transition: all 1s;
  transform: scale(1.2);
}

@media (max-width: 780px) {
  .title {
    font-size: 1.5rem;
  }
  .content {
    font-size: 0.9rem;
    padding-inline: 5px;
  }
  .template-image {
    padding-right: 5px;
    height: 25rem;
  }
}
</style>
