<script lang="ts">
import { defineComponent } from "vue";
import { CharacterNameRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputCharacterName",
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    description: { type: String, required: false },
  },
  data() {
    return {
      content: "",
      alert: false,
      regex: CharacterNameRegex,
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
  <div class="input-character-name-container">
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
      class="input-character-name"
      v-model="content"
      type="text"
      required
      autocomplete="username"
    />
  </div>
</template>

<style scoped>
.input-character-name-container {
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
