<script lang="ts">
import { defineComponent } from "vue";
import RegisterMainComponent from "comp/view-register/register.main.comp.vue";

export default defineComponent({
  name: "RegisterView",
  components: { RegisterMainComponent },
});
</script>

<template>
  <RegisterMainComponent />
</template>
