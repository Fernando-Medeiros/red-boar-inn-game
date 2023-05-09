<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, reactive } from "vue";
import {
  CharacterNameRegex,
  EmailRegex,
  NameRegex,
  PasswordRegex,
} from "core/validators/regex";

const emit = defineEmits(["emitContent"]);

const props = defineProps<{
  type: "email" | "name" | "text" | "password";
  regex: "email" | "name" | "charName" | "password";
  label: string;
  placeholder: string;
  description: string;
  isRequired?: boolean;
}>();

const content = ref("");

const alert = ref(false);

const regex = reactive({
  charName: CharacterNameRegex,
  email: EmailRegex,
  name: NameRegex,
  password: PasswordRegex,
});

const inputType = ref(props.type);

watch(content, () => {
  regex[props.regex].test(content.value)
    ? [emit("emitContent", content.value), (alert.value = false)]
    : (alert.value = true);
});

function showPassword() {
  inputType.value = inputType.value === "password" ? "text" : "password";
}
</script>

<template>
  <div class="input-comp-container">
    <label :for="label">{{ label }}</label>

    <div class="input-button-container">
      <input
        :class="['input', type === 'password' ? 'input-password' : '']"
        v-model="content"
        :autocomplete="type"
        :type="inputType"
        :placeholder="placeholder"
        :required="isRequired || true"
        :style="
          !content
            ? 'border-color: white'
            : alert
            ? 'border-color: red'
            : 'border-color: green'
        "
      />

      <div v-if="type === 'password'">
        <img
          class="btn-password"
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
.input-comp-container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
  color: var(--cor-font-color);
}

.input-comp-container label {
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
  color: var(--cor-font-color);
}
.input:focus {
  color: black;
  background-color: #d9d9d9;
}

/* password */
.input-password {
  width: 465px;
}
.input-button-container {
  display: flex;
}
.btn-password {
  width: min-content;
  height: 2rem;
  align-self: center;
  border: none;
  cursor: pointer;
}

@media (max-width: 780px) {
  .input-comp-container {
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
  .input-password {
    width: 275px;
  }
  .btn-password {
    height: 1.5rem;
  }
}
</style>
