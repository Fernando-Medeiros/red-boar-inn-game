<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputTextComponent",
  props: {
    placeholder: String,
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
  width: 100%;
  justify-content: center;
}
.input-text {
  width: 98%;
  height: 20px;
  padding: 10px 5px;
  font-size: 1.1rem;
  border-radius: 0.8rem;
}
@media (max-width: 780px) {
  .input-text {
    font-size: 14px;
  }
}
</style>
