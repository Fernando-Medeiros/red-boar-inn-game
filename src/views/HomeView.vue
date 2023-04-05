<script lang="ts">
import { defineComponent } from "vue";
import HomeMainComponent from "@/components/view-home/home.main.comp.vue";

export default defineComponent({
  name: "HomeView",
  components: { HomeMainComponent },
});
</script>

<template>
  <HomeMainComponent />
</template>
