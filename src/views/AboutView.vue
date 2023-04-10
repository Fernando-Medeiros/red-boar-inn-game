<script lang="ts">
import { defineComponent } from "vue";
import AboutMainComponent from "comp/view-about/about.main.comp.vue";

export default defineComponent({
  name: "AboutView",
  components: { AboutMainComponent },
});
</script>

<template>
  <AboutMainComponent />
</template>
