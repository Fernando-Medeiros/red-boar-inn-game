<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";

type Options = "increment" | "decrement";

defineEmits(["updateValue"]);

defineProps({
  attrName: { type: String, required: true },
  maxValue: { type: Number, required: true },
  type: { type: String as PropType<Options>, required: true },
});
</script>

<template>
  <div class="container">
    <img
      :class="maxValue <= 1 && type === 'increment' ? 'disabled' : 'IconButton'"
      :alt="type"
      :src="require(`assets/icons/${type}.svg`)"
      @click="$emit('updateValue', attrName)"
    />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 5px;
  width: min-content;
  justify-content: center;
  text-align: center;
}
.IconButton,
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
