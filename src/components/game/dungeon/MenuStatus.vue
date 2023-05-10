<script setup lang="ts">
import type { StatusProps } from "core/domain/props/character/status-props";
import { defineProps } from "vue";
import StatusPreview from "../Partials/StatusPreview.vue";

defineProps<{ status: StatusProps }>();
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
