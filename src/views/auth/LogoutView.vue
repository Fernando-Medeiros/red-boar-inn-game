<script setup lang="ts">
import { onMounted } from "vue";
import { SessionStorage } from "core/storage/session-storage";

onMounted(() => {
  SessionStorage.remove();
  location.reload();
});
</script>

<template>
  <div></div>
</template>
