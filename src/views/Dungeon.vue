<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupDungeon from "setup/page.dungeon.json";
import OpponentsDatabase from "core/database/enemies.json";
import CharacterPreview from "comp/game/profile/character-preview.vue";
import OpponentSprite from "comp/global/sprite/opponent.vue";
import MenuBattleButton from "comp/global/button/menu-battle.vue";

const Setup = SetupDungeon[Helpers.translate()];

export default defineComponent({
  name: "DungeonView",
  components: { CharacterPreview, OpponentSprite, MenuBattleButton },
  computed: {
    menu() {
      return Setup.menu;
    },
    opponents() {
      const { magic, melee } = OpponentsDatabase;
      return { magic, melee };
    },
  },
  methods: {
    changeAction(action: string) {
      console.log(action);
    },
  },
});
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
        <MenuBattleButton
          v-for="button in menu"
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
