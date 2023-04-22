<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputSubmit",
  props: {
    label: { type: String, required: true },
    isDisabled: { type: Boolean, required: false },
  },
});
</script>

<template>
  <div class="container">
    <input class="input" type="submit" :value="label" :disabled="isDisabled" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  width: 180px;
  height: 40px;
  align-content: center;
  border: none;
  border-radius: 5px;
  background: #d9d9d9;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  align-self: center;
  padding: auto;
}
.input:hover {
  background-color: white;
  transition: all 0.5s;
}
.input:disabled {
  background-color: grey;
  cursor: progress;
}
@media (max-width: 780px) {
  .input {
    font-size: 16px;
  }
}
</style>
