<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from "vue";

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

const statusBar = ref();

onMounted(() => {
  Object.assign(statusBar.value.style, {
    backgroundColor: colors[props.type],
    width: width[props.size],
  });
});

watch(props, () => {
  statusBar.value.style.width =
    (props.currentStatus / props.maxStatus) * 100 + "%";
});
</script>

<template>
  <body :style="'width:'.concat(width[props.size])">
    <div ref="statusBar"></div>

    <span>
      <strong> {{ currentStatus.toFixed(1) }} </strong>
      <strong> / </strong>
      <strong> {{ maxStatus }} </strong>
    </span>
  </body>
</template>

<style scoped>
body {
  position: relative;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #222222b2;
}

div {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: width 1s linear;
}
span {
  position: absolute;
  color: white;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 1fr 0.1fr 1fr;
}
</style>
