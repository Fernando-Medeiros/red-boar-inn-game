<script lang="ts">
import { defineComponent } from "vue";
import { LocalSession } from "core/storage/session.storage";

export default defineComponent({
  name: "LogoutView",
  created() {
    LocalSession.remove();
    location.reload();
  },
});
</script>

<template>
  <div></div>
</template>
