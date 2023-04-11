<script lang="ts">
import { defineComponent } from "vue";
import { CharacterNameRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputCharacterName",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
  data() {
    return {
      content: "",
      inputId: "",
      regex: CharacterNameRegex,
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
  <div class="input-character-name-container">
    <label class="label-character-name" for="">{{ label }}</label>

    <input
      class="input-character-name"
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
.input-character-name-container {
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label-character-name {
  margin-bottom: 1rem;
}
.input-character-name {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  color: white;
  border: none;
  border-radius: 5px;
  border-bottom: 3px solid #d9d9d9;
  background-color: transparent;
}
@media (max-width: 780px) {
  .input-character-name-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-character-name {
    font-size: 14px;
    width: 230px;
  }
}
</style>
