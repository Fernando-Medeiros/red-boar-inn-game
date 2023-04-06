<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputTextComponent",
  props: {
    placeholder: { type: String, required: true },
  },
  data() {
    return {
      content: "",
    };
  },
  watch: {
    content() {
      this.$emit("emitContent", this.content);
    },
  },
});
</script>

<template>
  <div class="input-text-container">
    <input
      class="input-text"
      type="text"
      v-model="content"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
.input-text-container {
  max-width: 500px;
  margin: auto;
  margin-top: 10px;
}
.input-text {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border: none;
  border-radius: 5px;
  background-color: #d9d9d9;
}

@media (max-width: 780px) {
  .input-text-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-text {
    font-size: 14px;
    width: 300px;
  }
}
</style>
