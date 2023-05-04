<script lang="ts">
import { defineComponent } from "vue";
import { PasswordRegex } from "core/validators/regex.validators";

export default defineComponent({
  name: "InputPassword",
  emits: ["emitContent"],
  props: {
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    description: { type: String, required: false },
    isRequired: { type: Boolean, default: true },
  },
  data() {
    return {
      content: "",
      alert: false,
      inputType: "password",
    };
  },
  methods: {
    showPassword() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
  watch: {
    content() {
      PasswordRegex.test(this.content)
        ? [this.$emit("emitContent", this.content), (this.alert = false)]
        : (this.alert = true);
    },
  },
});
</script>

<template>
  <div class="container">
    <label class="label" :for="label">{{ label }}</label>

    <div class="input-button-container">
      <input
        class="input"
        v-model="content"
        autocomplete="password"
        :type="inputType"
        :required="isRequired"
        :placeholder="placeholder"
        :style="
          !content
            ? 'border-color: white'
            : alert
            ? 'border-color: red'
            : 'border-color: green'
        "
      />
      <div>
        <img
          class="button-password"
          alt="show-password"
          @click.prevent="showPassword"
          :src="
            inputType === 'password'
              ? require('assets/icons/show-password.svg')
              : require('assets/icons/hide-password.svg')
          "
        />
      </div>
    </div>

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
  color: var(--cor-font-color);
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
  width: 465px;
  height: 20px;
  padding: 6px 5px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  border-bottom: 4px solid #d9d9d9;
  background-color: transparent;
  color: var(--cor-font-color);
}
.input:focus {
  color: black;
  background-color: #d9d9d9;
}
.input-button-container {
  display: flex;
}
.button-password {
  width: min-content;
  height: 36px;
  align-self: center;
  border: none;
  cursor: pointer;
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
    width: 265px;
  }
}
</style>
