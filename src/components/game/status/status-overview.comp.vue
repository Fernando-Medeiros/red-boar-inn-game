<script lang="ts">
import { defineComponent } from "vue";
import { HandlerCharacter } from "core/entities/handler-character";

export default defineComponent({
  name: "StatusOverview",
  data() {
    return {
      currentStatus: {},
    };
  },
  created() {
    this.currentStatus = HandlerCharacter.status().toJson();
  },
});
</script>

<template>
  <div>
    <div
      class="status-overview"
      v-for="(status, name) in currentStatus"
      :key="status"
      v-show="name != 'pubId'"
    >
      <p>{{ name }}</p>
      <p>{{ status }}</p>
    </div>
  </div>
</template>

<style scoped>
.status-overview {
  display: flex;
  padding: 10px;
  max-width: 300px;
  margin: auto;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
}
@media (max-width: 780px) {
}
</style>
