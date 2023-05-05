<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: { type: String, required: true },
  },
  computed: {
    progressBar() {
      return document.getElementById("progress") as HTMLElement;
    },
  },
  watch: {
    message(msg) {
      msg ? this.loadProgress(3, this.progressBar) : "";
    },
  },
  methods: {
    loadProgress(duration: number, progress: HTMLElement) {
      let seconds = duration;

      const interval = setInterval(() => {
        seconds--;

        seconds < -1
          ? [
              clearInterval(interval),
              (Object(this.$parent?.$.exposed).alertMessage.value = ""),
            ]
          : (progress.style.width = (seconds / duration) * duration + "0%");
      }, 500);

      progress.style.width = "100%";
    },
  },
});
</script>

<template>
  <div v-show="message" class="container">
    <div class="alert-box">
      <span>
        {{ message }}
      </span>

      <div class="progress-bar">
        <span id="progress"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  z-index: 50;
  right: 2%;
}
.alert-box {
  width: 15rem;
  height: auto;
  display: grid;
  padding: 10px;
  color: var(--cor-font-color);
  border-radius: 1rem;
  background-color: var(--cor-background-color);
}
.progress-bar {
  position: relative;
  width: 15rem;
  height: 5px;
  margin-top: 10px;
  background-color: #222222;
}
#progress {
  position: absolute;
  width: 15rem;
  height: 5px;
  background-color: burlywood;
  transition: width 1s linear;
}
@media (max-width: 780px) {
  .container {
    right: 0;
  }
}
</style>
