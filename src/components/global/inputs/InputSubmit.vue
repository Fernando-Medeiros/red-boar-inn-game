<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ label: string; isDisabled?: boolean }>();
</script>

<template>
  <div class="input-submit-container">
    <input type="submit" :value="label" :disabled="isDisabled" />
  </div>
</template>

<style scoped>
.input-submit-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-submit-container input {
  width: 180px;
  height: 40px;
  align-content: center;
  background: #d9d9d9;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  align-self: center;
  padding: auto;
}
.input-submit-container input:hover {
  background-color: white;
  transition: all 0.5s;
}
.input-submit-container input:disabled {
  background-color: grey;
  cursor: progress;
}
@media (max-width: 780px) {
  .input-submit-container input {
    font-size: 16px;
  }
}
</style>
