<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeButtonComponent",
  data() {
    return {
      button: "Registre-se",
    };
  },
});
</script>

<template>
  <div class="register">
    <img class="icon-register" src="@/assets/icons/guild.png" alt="register" />

    <router-link to="/">
      <button class="btn-register">
        <p>{{ button }}</p>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.register {
  display: grid;
  gap: 1rem;
  margin: 5px;
  width: min-content;
  justify-items: center;
}
.icon-register {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #e5e5e5;
}
.btn-register {
  width: 150px;
  height: 32px;
  background-color: #e5e5e5;
  box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  cursor: pointer;
}
.btn-register p {
  font-size: 16px;
  font-weight: bolder;
}
.btn-register:hover {
  background-color: white;
}

@media (max-width: 780px) {
}
</style>
