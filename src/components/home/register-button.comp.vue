<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterButton",
  props: {
    label: { type: String, required: true },
    pathToRegister: { type: String, required: true },
  },
});
</script>

<template>
  <div class="register-container">
    <img
      class="register-icon"
      alt="register"
      :src="require('assets/icons/guild.png')"
    />

    <router-link :to="pathToRegister">
      <button class="register-button">
        <p>{{ label }}</p>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.register-container {
  display: grid;
  gap: 1rem;
  width: 100%;
  margin: auto;
  justify-items: center;
}
.register-icon {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #e5e5e5;
}
.register-button {
  width: 200px;
  height: 42px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #e5e5e5;
  box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.25);
}
.register-button p {
  font-size: 16px;
  font-weight: bolder;
}
.register-button:hover {
  background-color: white;
  box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.25);
  transition: all 1s;
}
@media (max-width: 780px) {
}
</style>
