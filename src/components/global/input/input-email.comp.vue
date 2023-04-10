<script lang="ts">
import { defineComponent } from "vue";
import { EmailRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputEmailComponent",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
  data() {
    return {
      content: "",
      inputId: "",
      regex: EmailRegex,
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
  <div class="input-email-container">
    <label class="label-email" for="">{{ label }}</label>

    <input
      class="input-email"
      :id="inputId"
      :placeholder="placeholder"
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
.label-email {
  margin-bottom: 1rem;
}
.input-email {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  border-radius: 5px;
  border: 3px solid transparent;
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
