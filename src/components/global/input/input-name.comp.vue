<script lang="ts">
import { defineComponent } from "vue";
import { NameRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputNameComponent",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
  data() {
    return {
      content: "",
      inputId: "",
      regex: NameRegex,
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
  <div class="input-name-container">
    <label class="label-name" for="">{{ label }}</label>

    <input
      class="input-name"
      :id="inputId"
      :placeholder="placeholder"
      v-model="content"
      type="text"
      required
      autocomplete="name"
    />
  </div>
</template>

<style scoped>
.input-name-container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label-name {
  margin-bottom: 1rem;
}
.input-name {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border-radius: 5px;
  border: 3px solid transparent;
  background-color: #d9d9d9;
}
@media (max-width: 780px) {
  .input-name-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-name {
    font-size: 14px;
    width: 300px;
  }
}
</style>
