<script lang="ts">
import { defineComponent } from "vue";
import { EmailRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputEmail",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    description: { type: String, required: false },
  },
  data() {
    return {
      content: "",
      alert: false,
      regex: EmailRegex,
    };
  },
  watch: {
    content() {
      this.regex.test(this.content)
        ? [this.$emit("emitContent", this.content), (this.alert = false)]
        : (this.alert = true);
    },
  },
});
</script>

<template>
  <div class="input-email-container">
    <span class="label-description-container">
      <label class="label-name" for="">{{ label }}</label>
      <p class="" v-if="alert && content">
        {{ description }}
      </p>
    </span>

    <input
      :style="
        !content
          ? 'border-color: white'
          : alert
          ? 'border-color: red'
          : 'border-color: green'
      "
      :placeholder="placeholder"
      class="input-email"
      v-model="content"
      type="email"
      autocomplete="email"
      required
    />
  </div>
</template>

<style scoped>
.input-email-container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label-description-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.label-description-container > p {
  font-size: 13px;
}
.input-email {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border: none;
  border-radius: 5px;
  border-bottom: 4px solid #d9d9d9;
  background-color: #d9d9d9;
}
.input-email:focus {
  background-color: #d9d9d9;
}
@media (max-width: 780px) {
  .input-email-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-email {
    font-size: 14px;
    width: 300px;
  }
}
</style>
