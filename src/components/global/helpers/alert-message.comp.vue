<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlertMessage",
  emits: ["deleteMessage"],
  props: {
    message: { type: String, required: false },
  },
  methods: {
    loadProgress(duration: number, progress: HTMLElement) {
      let seconds = duration;

      const interval = setInterval(() => {
        seconds--;

        seconds < -1
          ? [clearInterval(interval), this.$emit("deleteMessage", "")]
          : (progress.style.width = (seconds / duration) * duration + "0%");
      }, 500);

      progress.style.width = "100%";
    },
  },
  watch: {
    message() {
      const progress = document.getElementById("progress");

      progress && this.message ? this.loadProgress(5, progress) : null;
    },
  },
});
</script>

<template>
  <div class="main-container">
    <div v-show="message" class="container main-container">
      <div class="alert-box">
        <span>
          {{ message }}
        </span>

        <div class="progress-bar">
          <span id="progress"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  z-index: 50;
  display: flex;
  justify-content: end;
}
.alert-box {
  width: 20rem;
  height: 2rem;
  display: grid;
  padding: 10px;
  color: black;
  border-radius: 1rem;
  background-color: white;
}
.progress-bar {
  position: relative;
  width: 20rem;
  height: 5px;
  margin-top: 10px;
  background-color: #222222;
}
#progress {
  position: absolute;
  width: 20rem;
  height: 5px;
  background-color: burlywood;
  transition: width 1s linear;
}
</style>
