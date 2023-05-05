<script setup lang="ts">
import { onMounted } from "vue";
import { LocalSession } from "core/storage/session.storage";

onMounted(() => {
  LocalSession.remove();
  location.reload();
});
</script>

<template>
  <div></div>
</template>
