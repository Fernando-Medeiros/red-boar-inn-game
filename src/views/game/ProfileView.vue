<script setup lang="ts">
import { Helpers } from "core/helpers/helpers";
import SetupProfile from "setup/page.profile.json";
import CharacterPreview from "comp/game/Partials/CharacterPreview.vue";
import IconButton from "comp/global/buttons/IconButton.vue";

const { menu } = SetupProfile[Helpers.translate()];
</script>

<template>
  <div class="main-background">
    <div class="main-container">
      <div class="menu-container">
        <div class="menu-top-one-icon">
          <IconButton
            :name="menu.status.icon"
            :label="menu.status.label"
            :to-route="menu.status.route"
          />
        </div>

        <div class="menu-top-two-icon">
          <IconButton
            :name="menu.skills.icon"
            :label="menu.skills.label"
            :to-route="menu.skills.route"
          />
          <IconButton
            :name="menu.equipment.icon"
            :label="menu.equipment.label"
            :to-route="menu.equipment.route"
          />
        </div>

        <div class="menu-middle-four-icon-and-sprite">
          <div class="menu-middle-two-icon">
            <IconButton
              :name="menu.codex.icon"
              :label="menu.codex.label"
              :to-route="menu.codex.route"
            />
            <IconButton
              :name="menu.dungeon.icon"
              :label="menu.dungeon.label"
              :to-route="menu.dungeon.route"
            />
          </div>

          <CharacterPreview />

          <div class="menu-middle-two-icon">
            <IconButton
              :name="menu.inventory.icon"
              :label="menu.inventory.label"
              :to-route="menu.inventory.route"
            />
            <IconButton
              :name="menu.arena.icon"
              :label="menu.arena.label"
              :to-route="menu.arena.route"
            />
          </div>
        </div>

        <div class="menu-bottom-two-icon">
          <IconButton
            :name="menu.quests.icon"
            :label="menu.quests.label"
            :to-route="menu.quests.route"
          />
          <IconButton
            :name="menu.options.icon"
            :label="menu.options.label"
            :to-route="menu.options.route"
          />
        </div>

        <div class="menu-bottom-one-icon">
          <IconButton
            :name="menu.classes.icon"
            :label="menu.classes.label"
            :to-route="menu.classes.route"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  display: grid;
  gap: 1rem;
  padding-block: 1rem;
  min-height: 500px;
  border-radius: 1rem;
  background: var(--cor-background-linear-gradient),
    var(--cor-background-linear-gradient);
}

.menu-top-one-icon,
.menu-top-two-icon,
.menu-bottom-one-icon,
.menu-bottom-two-icon,
.menu-middle-four-icon-and-sprite {
  display: flex;
}

.menu-top-one-icon,
.menu-bottom-one-icon {
  justify-content: center;
}

.menu-top-two-icon,
.menu-bottom-two-icon,
.menu-middle-four-icon-and-sprite {
  justify-content: space-around;
}

.menu-middle-two-icon {
  display: grid;
  gap: 3rem;
}
@media (max-width: 780px) {
  .menu-container {
    gap: 1.5rem;
  }
}
</style>
