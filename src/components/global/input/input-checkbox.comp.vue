<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputCheckBox",
  emits: ["emitContent"],
  props: {
    label: { type: String, required: true },
  },
});
</script>

<template>
  <div class="input-checkbox-container">
    <input
      class="input-checkbox"
      type="checkbox"
      @click="$emit('emitContent')"
    />
    <label class="label-checkbox" for="label - checkbox">{{ label }}</label>
  </div>
</template>

<style scoped>
.input-checkbox-container {
  display: flex;
  gap: 10px;
  width: max-content;
  align-items: center;
}
.label-checkbox {
  color: white;
  font-size: 1rem;
  font-weight: 300;
}
.input-checkbox {
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 0.8rem;
}
@media (max-width: 780px) {
}
</style>
