<script setup lang="ts">
import { defineEmits } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon-battle.json";
import BattleButton from "comp/global/buttons/BattleButton.vue";

defineEmits(["emitAction"]);

const buttonActions = { ...SetupDungeon[Helpers.translate()].menu };
</script>

<template>
  <div class="menu-battle">
    <BattleButton
      v-for="button in buttonActions"
      :key="button.icon"
      :name="button.icon"
      :label="button.label"
      @change-action="
        (action) => {
          $emit('emitAction', action);
        }
      "
    />
  </div>

  <div class="menu-actions-container">
    <slot name="one"></slot>
    <slot name="two"></slot>
    <slot name="three"></slot>
    <slot name="four"></slot>
    <slot name="five"></slot>
    <slot name="six"></slot>
  </div>
</template>

<style scoped>
.menu-battle {
  display: grid;
  gap: 10px;
  padding-block: 1rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

.menu-battle > div {
  padding-inline: 2px;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.589);
}

.menu-actions-container {
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 2rem;
  border-radius: 1rem;
  border-top: 1px solid rgba(245, 245, 245, 0.356);
}

@media (max-width: 780px) {
  .menu-battle {
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
    row-gap: 10px;
    justify-content: space-around;
  }
  .menu-battle div {
    width: 135px;
  }

  .menu-actions-container {
    display: grid;
  }
}
</style>
