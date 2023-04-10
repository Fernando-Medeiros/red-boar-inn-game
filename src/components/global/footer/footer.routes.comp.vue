<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "FooterRoutesComponent",
  props: {
    routes: {
      type: Array as PropType<{ path: string; name: string }[]>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="footer-routes">
    <router-link v-for="route in routes" :key="route.path" :to="route.path">
      {{ route.name }}
    </router-link>
  </div>
</template>

<style scoped>
.footer-routes {
  display: grid;
  gap: 0.9rem;
  margin: 5px;
}
.footer-routes a {
  color: #e8e8e8;
  text-decoration: none;
}
.footer-routes a:hover {
  text-decoration: underline 2px;
  transition: all 1s;
}
</style>
