<script lang="ts">
import { defineComponent } from "vue";
import { NameRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputName",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    description: { type: String, required: false },
  },
  data() {
    return {
      content: "",
      alert: false,
    };
  },
  watch: {
    content() {
      NameRegex.test(this.content)
        ? [this.$emit("emitContent", this.content), (this.alert = false)]
        : (this.alert = true);
    },
  },
});
</script>

<template>
  <div class="container">
    <label class="label" :for="content">{{ label }}</label>

    <input
      :placeholder="placeholder"
      class="input"
      v-model="content"
      type="text"
      required
      autocomplete="name"
      :style="
        !content
          ? 'border-color: white'
          : alert
          ? 'border-color: red'
          : 'border-color: green'
      "
    />

    <p class="description" v-if="alert && content">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label {
  margin-bottom: 1rem;
}
.description {
  font-size: 14px;
  margin-top: 1rem;
}
.input {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border: none;
  border-radius: 5px;
  border-bottom: 4px solid #d9d9d9;
  background-color: #d9d9d9;
}
@media (max-width: 780px) {
  .container {
    max-width: 100%;
    justify-self: center;
  }
  .description {
    font-size: 10px;
  }
  .input {
    font-size: 14px;
    width: 300px;
  }
}
</style>
