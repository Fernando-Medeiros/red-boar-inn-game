<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassComponent",
  components: {},
  data() {
    return {};
  },
});
</script>

<template>
  <div class="view-container">
    <div class="main-container"></div>
  </div>
</template>

<style scoped>
.view-container {
  margin-bottom: 20px;
}

@media (max-width: 780px) {
}
</style>
