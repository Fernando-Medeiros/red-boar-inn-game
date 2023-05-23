<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from "vue";

const props = defineProps<{ name: string; label: string }>();

const emit = defineEmits(["changeAction"]);

const sprite = ref();

onMounted(() => {
  Object.assign(sprite.value, {
    alt: props.name,
    src: require(`assets/icons/${props.name}.svg`),
  });
});
</script>

<template>
  <div @click="emit('changeAction', name)">
    <img ref="sprite" />
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  max-width: 200px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  color: white;
}
img {
  width: 2rem;
  height: 2rem;
}
p {
  font-size: 1.2rem;
}
div:hover {
  background-color: #5c5c5c76;
}

@media (max-width: 780px) {
  div {
    max-width: 150px;
    width: 100%;
    padding: 10px 0;
  }
  p {
    font-size: 1rem;
  }
}
</style>
