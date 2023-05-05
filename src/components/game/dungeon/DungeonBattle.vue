<script setup lang="ts">
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon.json";
import OpponentsDatabase from "core/database/enemies.json";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import OpponentSprite from "comp/global/sprites/OpponentSprite.vue";
import BattleButton from "comp/global/buttons/BattleButton.vue";

const Setup = SetupDungeon[Helpers.translate()];

const menuActions = { ...Setup.menu };
const opponents = { ...OpponentsDatabase };

function changeAction(action: string) {
  console.log(action);
}
</script>

<template>
  <div class="main-background">
    <div class="main-container">
      <div class="battle-container battle-background">
        <CharacterPreview :rotate-y="true" />

        <OpponentSprite
          :name="opponents.magic[0].name"
          :level="opponents.magic[0].level"
          :rotate-y="false"
        />
      </div>

      <div class="battle-menu">
        <BattleButton
          v-for="button in menuActions"
          :key="button.icon"
          :name="button.icon"
          :label="button.label"
          @change-action="changeAction"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.battle-background {
  background-position: bottom;
  background-image: var(--cor-background-linear-gradient),
    url("assets/pictures/img3.webp");
}
.battle-container,
.battle-menu {
  display: grid;
  padding-block: 1rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
.battle-menu {
  background-image: var(--cor-background-linear-gradient);
}
</style>
