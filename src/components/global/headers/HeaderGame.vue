<script setup lang="ts">
import { ref } from "vue";
import Helpers from "core/helpers/Helpers";
import SetupHeaderGame from "setup/global.header-game.json";
import IconButton from "comp/global/buttons/IconButton.vue";

const menuIcons = ref(SetupHeaderGame[Helpers.translate()].icons);
</script>

<template>
  <div class="background-banner">
    <div class="main-container">
      <div class="banner-status-container">
        <div class="banner-nav-icons">
          <IconButton
            v-for="icon in menuIcons"
            :key="icon.name"
            :name="icon.name"
            :label="icon.label"
            :to-route="icon.path"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-banner {
  background: var(--cor-background-linear-gradient),
    var(--cor-background-linear-gradient);
}
.banner-status-container {
  display: flex;
  padding: 5px 1rem;
  align-items: center;
  justify-content: flex-end;
}
.banner-nav-icons {
  display: flex;
  gap: 0.5rem;
}
</style>
