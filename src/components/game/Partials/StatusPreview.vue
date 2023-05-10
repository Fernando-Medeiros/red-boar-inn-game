<script setup lang="ts">
import type { StatusProps } from "core/domain/props/character/status-props";
import { defineProps, reactive, watch } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupStatus from "setup/page.status.json";

const setup = { ...SetupStatus[Helpers.translate()] };

const props = defineProps<{ status: StatusProps }>();

const primary = reactive({} as StatusProps);

const computedStatus = reactive({
  attackMelee: 1,
  attackMagic: 1,
  defense: 1,
  block: 1,
  dodge: 1,
  critical: 1,
});

watch(props, () => {
  const { points, strength, intelligence, dexterity, vitality } = props.status;

  Object.assign(primary, {
    points,
    strength,
    intelligence,
    dexterity,
    vitality,
  });
  Object.assign(computedStatus, {
    attackMelee: primary.strength + primary.dexterity / 10,
    attackMagic: primary.intelligence + primary.dexterity / 10,
    defense: primary.dexterity / 4,
    block: (primary.dexterity * 0.3) / 2,
    dodge: (primary.dexterity * 0.2) / 2,
    critical: (primary.dexterity * 0.1) / 2,
  });
});
</script>

<template>
  <div class="status-preview-container">
    <div>
      <span
        class="status-preview"
        v-for="(value, name) in computedStatus"
        :key="name"
      >
        <p>{{ setup[name].label }}</p>
        <p class="status-value">{{ value.toFixed(1) }}</p>
      </span>
    </div>
  </div>
</template>

<style scoped>
.status-preview-container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
}
.status-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5px;
  height: 30px;
  max-width: 300px;
  border-bottom: 1px solid var(--cor-font-color);
}
.status-value {
  text-align: end;
}
@media (max-width: 780px) {
}
</style>
