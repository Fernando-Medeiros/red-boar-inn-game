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
  <div class="input-submit-container">
    <input
      class="input-submit input-submit-label"
      type="submit"
      :style="isDisabled ? 'background-color: grey' : 'background-color: none'"
      :value="label"
      :disabled="isDisabled"
    />
  </div>
</template>

<style scoped>
.input-submit-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-submit {
  width: 180px;
  height: 40px;
  align-content: center;
  border: none;
  border-radius: 5px;
  background: #d9d9d9;
  cursor: pointer;
}
.input-submit-label {
  font-size: 20px;
  text-align: center;
  align-self: center;
  padding: auto;
}
.input-submit:hover {
  background-color: white;
  transition: all 0.5s;
}

@media (max-width: 780px) {
  .input-submit-label {
    font-size: 16px;
  }
}
</style>
