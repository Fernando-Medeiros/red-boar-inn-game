<script setup lang="ts">
import { defineEmits } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon-battle.json";
import BattleButton from "comp/global/buttons/BattleButton.vue";

const emit = defineEmits(["emitAction"]);

const menuActions = { ...SetupDungeon[Helpers.translate()].menu };
</script>

<template>
  <div class="menu-battle">
    <BattleButton
      v-for="button in menuActions"
      :key="button.icon"
      :name="button.icon"
      :label="button.label"
      @change-action="
        (action) => {
          emit('emitAction', action);
        }
      "
    />
  </div>
</template>

<style scoped>
.menu-battle {
  display: grid;
  gap: 10px;
  padding-block: 1rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
.menu-battle {
  grid-template-columns: 1fr 1fr 1fr;
}
.menu-battle > div {
  padding-inline: 2px;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.589);
}
@media (max-width: 780px) {
  .menu-battle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
