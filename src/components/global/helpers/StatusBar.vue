<script setup lang="ts">
import { defineProps, watch } from "vue";

const props = defineProps<{
  type: "health" | "energy" | "experience";
  maxStatus: number;
  currentStatus: number;
}>();

const colors = {
  health: "tomato",
  energy: "deepskyblue",
  experience: "#00B5A3",
};

const id = Math.random().toString();

watch(props, () => {
  const current = document.getElementById(id) as HTMLElement;

  current.style.width = (props.currentStatus / props.maxStatus) * 100 + "%";
});
</script>

<template>
  <div class="status-bar">
    <span
      class="current-status"
      :id="id"
      :style="`background-color: ${colors[props.type]}`"
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
