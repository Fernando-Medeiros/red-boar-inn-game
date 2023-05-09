<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
import { CharacterNameRegex } from "core/validators/regex.validators";

const emit = defineEmits(["emitContent"]);

defineProps<{
  label: string;
  placeholder: string;
  description: string;
  isRequired?: boolean;
}>();

const content = ref("");
const alert = ref(false);

watch(content, () => {
  CharacterNameRegex.test(content.value)
    ? [emit("emitContent", content.value), (alert.value = false)]
    : (alert.value = true);
});
</script>

<template>
  <div class="container">
    <label class="label" :for="label">{{ label }}</label>

    <input
      class="input"
      v-model="content"
      autocomplete="username"
      type="text"
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

    <p class="description" v-if="alert && content">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.container {
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
  width: 500px;
  height: 20px;
  padding: 6px 5px;
  color: var(--cor-font-color);
}
.input:focus {
  color: black;
  background-color: #d9d9d9;
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
    width: 230px;
  }
}
</style>
