<script lang="ts">
import { defineComponent, PropType } from "vue";

type Options = "increment" | "decrement";

export default defineComponent({
  name: "AddButton",
  emits: ["updateValue"],
  props: {
    attrName: { type: String, required: true },
    maxValue: { type: Number, required: true },
    type: { type: String as PropType<Options>, required: true },
  },
});
</script>

<template>
  <div class="icon-button-container">
    <img
      :class="
        maxValue <= 1 && type === 'increment' ? 'disabled' : 'icon-button'
      "
      :alt="type"
      :src="require(`assets/icons/${type}.png`)"
      @click="$emit('updateValue', attrName)"
    />
  </div>
</template>

<style scoped>
.icon-button-container {
  display: grid;
  gap: 5px;
  width: min-content;
  justify-content: center;
  text-align: center;
}
.icon-button,
.disabled {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.disabled {
  filter: grayscale(2);
  cursor: default;
}
</style>
