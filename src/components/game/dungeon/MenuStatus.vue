<script setup lang="ts">
import type { PropsStatus } from "core/schemas/status.schema";
import { defineProps } from "vue";
import StatusPreview from "../Partials/StatusPreview.vue";

defineProps<{ status: PropsStatus }>();
</script>

<template>
  <div class="status-container">
    <StatusPreview :status="status" />
  </div>
</template>

<style scoped>
.status-container {
  margin: auto;
}
</style>
