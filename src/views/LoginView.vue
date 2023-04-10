<script lang="ts">
import { defineComponent } from "vue";
import LoginMainComponent from "comp/view-login/login.main.comp.vue";

export default defineComponent({
  name: "LoginView",
  components: { LoginMainComponent },
});
</script>

<template>
  <LoginMainComponent />
</template>
