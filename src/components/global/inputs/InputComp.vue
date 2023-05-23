<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, onMounted } from "vue";
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

const regex = {
  charName: CharacterNameRegex,
  email: EmailRegex,
  name: NameRegex,
  password: PasswordRegex,
};

const content = ref("");
const alert = ref(false);
const input = ref();
const inputType = ref(props.type);

onMounted(() => {
  Object.assign(input.value, {
    type: props.type,
    autocomplete: props.type,
    placeholder: props.placeholder,
    required: props.isRequired || true,
  });
});

watch(content, () => {
  if (regex[props.regex].test(content.value)) {
    emit("emitContent", content.value);
    alert.value = false;
  } else {
    alert.value = true;
  }

  const borderColor = !content.value ? "white" : alert.value ? "red" : "green";

  input.value.style.borderColor = borderColor;
});

function showPassword() {
  inputType.value = isType("password") ? "text" : "password";
}

function isType(type: string) {
  return inputType.value.match(type);
}
</script>

<template>
  <div class="input-container">
    <span>
      <label :for="label">{{ label }}</label>

      <img
        v-if="type.match('password')"
        @click="showPassword"
        :src="
          isType('password')
            ? require('assets/icons/show-password.svg')
            : require('assets/icons/hide-password.svg')
        "
      />
    </span>

    <input ref="input" :type="inputType" v-model="content" />

    <p v-if="alert && content">{{ description }}</p>
  </div>
</template>

<style scoped>
.input-container {
  max-width: 500px;
  display: grid;
  margin: auto;
  margin-top: 10px;
  color: var(--cor-font-color);
}
.input-container span {
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
}
.input-container input {
  font-size: 1.1rem;
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  color: var(--cor-font-color);
}
.input-container input:focus {
  color: black;
  background-color: #d9d9d9;
}
.input-container img {
  width: min-content;
  height: 2rem;
  align-self: center;
  border: none;
  cursor: pointer;
}
.input-container p {
  font-size: 14px;
  margin-top: 1rem;
}

@media (max-width: 780px) {
  .input-container {
    max-width: 100%;
    justify-self: center;
  }
  .input-container input {
    font-size: 14px;
    width: 300px;
  }
  .input-container img {
    height: 1.5rem;
  }
  .input-container p {
    font-size: 10px;
  }
}
</style>
