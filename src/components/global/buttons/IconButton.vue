<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";

const props = defineProps<{ name: string; label: string; toRoute?: string }>();

const sprite = ref();

onMounted(() => {
  Object.assign(sprite.value, {
    alt: props.name,
    src: require(`assets/icons/${props.name}.svg`),
    style: props.toRoute ? "" : "filter: grayscale()",
  });
});
</script>

<template>
  <router-link class="Icon-btn-link" :to="toRoute || ''">
    <div class="icon-btn-container">
      <img ref="sprite" />
      <p>{{ label }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.Icon-btn-link {
  text-decoration: none;
}
.Icon-btn-link:hover {
  filter: brightness(1.3);
}

.icon-btn-container {
  display: grid;
  gap: 10px;
  min-width: 86px;
  justify-content: center;
  text-align: center;
}
.icon-btn-container img {
  width: 3rem;
  height: 3rem;
  margin: auto;
  cursor: pointer;
}
.icon-btn-container p {
  color: white;
}
@media (max-width: 780px) {
  .icon-btn-container img {
    width: 2rem;
    height: 2rem;
  }
  .icon-btn-container p {
    font-size: 14px;
  }
}
</style>
