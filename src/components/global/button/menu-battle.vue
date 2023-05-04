<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuBattleButton",
  emits: ["changeAction"],
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
  },
});
</script>

<template>
  <div class="container" @click="$emit('changeAction', name)">
    <img
      class="button"
      :alt="name"
      :src="require(`assets/icons/${name}.svg`)"
    />
    <span class="label">
      {{ label }}
    </span>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  max-width: 200px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  color: white;
}
.button {
  width: 2rem;
  height: 2rem;
}
.label {
  font-size: 1.2rem;
}
.container:hover {
  background-color: #5c5c5c76;
}
@media (max-width: 780px) {
  .container {
    max-width: 150px;
    width: 100%;
    padding: 10px 0;
  }
  .label {
    font-size: 1rem;
  }
}
</style>
