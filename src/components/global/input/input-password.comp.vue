<script lang="ts">
import { defineComponent } from "vue";
import { PasswordRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputPassword",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
  data() {
    return {
      content: "",
      inputId: "",
      regex: PasswordRegex,
    };
  },
  created() {
    this.inputId = Math.random().toString();
  },
  methods: {
    verifyInputRegex(): boolean | undefined {
      return this.regex?.test(this.content);
    },
    emitRegexAlert(input: HTMLElement): void {
      input.style.borderColor = "red";
    },
    emitRegexSuccess(input: HTMLElement): void {
      input.style.borderColor = "green";
    },
  },
  watch: {
    content() {
      const input = document.getElementById(this.inputId);

      this.verifyInputRegex()
        ? [
            this.$emit("emitContent", this.content),
            this.emitRegexSuccess(input as HTMLElement),
          ]
        : this.emitRegexAlert(input as HTMLElement);
    },
  },
});
</script>

<template>
  <div class="input-password-container">
    <label class="label-password" for="">{{ label }}</label>

    <input
      class="input-password"
      :id="inputId"
      :placeholder="placeholder"
      v-model="content"
      type="password"
      autocomplete="current-password"
      required
    />
  </div>
</template>

<style scoped>
.input-password-container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label-password {
  margin-bottom: 1rem;
}
.input-password {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border-radius: 5px;
  border: 3px solid transparent;
  background-color: #d9d9d9;
}
@media (max-width: 780px) {
  .input-password-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-password {
    font-size: 14px;
    width: 300px;
  }
}
</style>
