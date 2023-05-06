<script setup lang="ts">
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon.json";
import OpponentsDatabase from "core/database/enemies.json";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import OpponentSprite from "comp/global/sprites/OpponentSprite.vue";
import BattleButton from "comp/global/buttons/BattleButton.vue";
import StatusBar from "comp/global/helpers/StatusBar.vue";
import { ref } from "vue";

const Setup = SetupDungeon[Helpers.translate()];

const menuActions = { ...Setup.menu };

const opponentTest = ref({ ...OpponentsDatabase.magic[0] });

const statusSecondary = ref({
  experience: 1,
  health: 10,
  energy: 10,
  currentHealth: 10,
  currentEnergy: 10,
});

function changeAction(action: string) {
  if (action === "attack") {
    opponentTest.value.currentHealth--;
    statusSecondary.value.currentHealth--;
  }
}
</script>

<template>
  <div class="main-background">
    <div class="main-container">
      <div class="battle-container">
        <div>
          <CharacterPreview :rotate-y="true" />

          <span class="statusBar-container">
            <StatusBar
              :type="'health'"
              :max-status="statusSecondary.health"
              :current-status="statusSecondary.currentHealth"
            />
            <StatusBar
              :type="'energy'"
              :max-status="statusSecondary.energy"
              :current-status="statusSecondary.currentEnergy"
            />
          </span>
        </div>

        <div>
          <OpponentSprite
            :name="opponentTest.name"
            :level="opponentTest.level"
            :rotate-y="false"
          />

          <span class="statusBar-container">
            <StatusBar
              :type="'health'"
              :max-status="opponentTest.health"
              :current-status="opponentTest.currentHealth"
            />
            <StatusBar
              :type="'energy'"
              :max-status="opponentTest.energy"
              :current-status="opponentTest.currentEnergy"
            />
          </span>
        </div>
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

.statusBar-container {
  display: grid;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 10px;
}
</style>
