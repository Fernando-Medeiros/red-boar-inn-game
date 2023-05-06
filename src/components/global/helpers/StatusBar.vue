<script setup lang="ts">
import { defineProps, watch } from "vue";

const props = defineProps<{
  type: "health" | "energy" | "experience";
  size: "large" | "medium" | "small";
  maxStatus: number;
  currentStatus: number;
}>();

const colors = {
  health: "tomato",
  energy: "deepskyblue",
  experience: "#00B5A3",
};

const width = {
  large: "300px",
  medium: "150px",
  small: "100px",
};

const id = Math.random().toString();

watch(props, () => {
  const current = document.getElementById(id) as HTMLElement;

  current.style.width = (props.currentStatus / props.maxStatus) * 100 + "%";
});
</script>

<template>
  <div class="status-bar" :style="`width:${width[props.size]}`">
    <span
      class="current-status"
      :id="id"
      :style="`background-color: ${colors[props.type]}; width:${
        width[props.size]
      }`"
    >
    </span>

    <span class="label-status">
      <strong> {{ currentStatus }} </strong>
      <strong> / </strong>
      <strong> {{ maxStatus }} </strong>
    </span>
  </div>
</template>

<style scoped>
.status-bar {
  position: relative;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #222222b2;
}
.current-status {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: width 1s linear;
}
.label-status {
  position: absolute;
  color: white;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 1fr 0.1fr 1fr;
}
</style>
