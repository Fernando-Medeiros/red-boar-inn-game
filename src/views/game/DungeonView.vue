<script setup lang="ts">
import { ref } from "vue";
import DungeonBattle from "comp/game/dungeon/DungeonBattle.vue";
import DungeonGate from "comp/game/dungeon/DungeonGate.vue";

const activeDungeon = ref(false);
</script>

<template>
  <DungeonGate @click.prevent="activeDungeon = !activeDungeon" />

  <DungeonBattle v-if="activeDungeon" />
</template>

<style scoped></style>
