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
    };
  },
  watch: {
    content() {
      CharacterNameRegex.test(this.content)
        ? [this.$emit("emitContent", this.content), (this.alert = false)]
        : (this.alert = true);
    },
  },
});
</script>

<template>
  <div class="container">
    <span class="label-description">
      <label class="label-name" for="">{{ label }}</label>

      <p class="" v-if="alert && content">
        {{ description }}
      </p>
    </span>

    <input
      class="input"
      v-model="content"
      type="text"
      required
      autocomplete="username"
      :placeholder="placeholder"
      :style="
        !content
          ? 'border-color: white'
          : alert
          ? 'border-color: red'
          : 'border-color: green'
      "
    />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  margin: auto;
  margin-top: 10px;
}
.label-description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.label-description > p {
  font-size: 13px;
}
.input {
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
  .container {
    max-width: 100%;
    justify-self: center;
  }
  .input {
    font-size: 14px;
    width: 230px;
  }
}
</style>
