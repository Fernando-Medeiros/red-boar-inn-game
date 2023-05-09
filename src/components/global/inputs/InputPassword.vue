<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
import { PasswordRegex } from "core/validators/regex.validators";

const emit = defineEmits(["emitContent"]);

defineProps<{
  label: string;
  placeholder: string;
  description: string;
  isRequired?: boolean;
}>();

const content = ref("");
const alert = ref(false);
const inputType = ref("password");

watch(content, () => {
  PasswordRegex.test(content.value)
    ? [emit("emitContent", content.value), (alert.value = false)]
    : (alert.value = true);
});

function showPassword() {
  inputType.value = inputType.value === "password" ? "text" : "password";
}
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
        :required="isRequired || true"
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
          class="button"
          alt="show-password"
          @click="showPassword"
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
  color: var(--cor-font-color);
}
.input:focus {
  color: black;
  background-color: #d9d9d9;
}
.input-button-container {
  display: flex;
}
.button {
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
