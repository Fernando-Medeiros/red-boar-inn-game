<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "src/core/middlewares/local-storage";
import SetupProfile from "setup/page.profile.json";
import character from "core/database/character-example.json";

import Sprite from "comp/global/sprite/sprite.comp.vue";
import IconButton from "comp/global/button/icon-button.comp.vue";
import IconStatic from "comp/global/sprite/icon-static.comp.vue";

function getSetup() {
  return SetupProfile[LocalStorage.getLanguage()];
}
function getCharacter() {
  return LocalStorage.getCharacter<typeof character>();
}

export default defineComponent({
  name: "ProfileView",
  components: { IconStatic, Sprite, IconButton },

  data() {
    return {
      character: getCharacter(),

      spriteInfo: getSetup().sprite,
      statusInfo: getSetup().barStatus,
      menuInfo: getSetup().menu,
    };
  },
});
</script>

<template>
  <div class="main-container">
    <div class="banner-status-container">
      <div>
        <IconStatic :name="'gold'" :label="'1'" />
        <IconStatic :name="'jewel'" :label="'1'" />
      </div>

      <IconButton
        :name="statusInfo.notification.icon"
        :label="statusInfo.notification.label"
      />
    </div>

    <div class="background">
      <div class="menu-container">
        <div class="menu-top-one-icon">
          <IconButton
            :name="menuInfo.status.icon"
            :label="menuInfo.status.label"
          />
        </div>

        <div class="menu-top-two-icon">
          <IconButton
            :name="menuInfo.skills.icon"
            :label="menuInfo.skills.label"
          />
          <IconButton
            :name="menuInfo.equipment.icon"
            :label="menuInfo.equipment.label"
          />
        </div>

        <div class="menu-middle-four-icon-and-sprite">
          <div class="menu-middle-two-icon">
            <IconButton
              :name="menuInfo.codex.icon"
              :label="menuInfo.codex.label"
            />
            <IconButton
              :name="menuInfo.dungeon.icon"
              :label="menuInfo.dungeon.label"
            />
          </div>

          <div class="sprite-character">
            <Sprite
              :sprite-name="character.className"
              :sprite-gender="'man'"
              :rotate-y="false"
            />
            <span>
              <p>{{ character.charName }}</p>
              <span>
                <p>
                  {{ spriteInfo.levelLabel }} - {{ character.level }} /
                  {{ character.className }}
                </p>
              </span>
            </span>
          </div>

          <div class="menu-middle-two-icon">
            <IconButton
              :name="menuInfo.inventory.icon"
              :label="menuInfo.inventory.label"
            />
            <IconButton
              :name="menuInfo.arena.icon"
              :label="menuInfo.arena.label"
            />
          </div>
        </div>

        <div class="menu-bottom-two-icon">
          <IconButton
            :name="menuInfo.quests.icon"
            :label="menuInfo.quests.label"
          />
          <IconButton
            :name="menuInfo.options.icon"
            :label="menuInfo.options.label"
          />
        </div>

        <div class="menu-bottom-one-icon">
          <IconButton
            :name="menuInfo.classes.icon"
            :label="menuInfo.classes.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  z-index: 1;
  padding: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}

/* BANNER STATUS */
.banner-status-container {
  display: flex;
  padding: 5px 1rem;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(#28282878, #32323269),
    url("assets/pictures/img4.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* MENU */
.menu-container {
  display: grid;
  gap: 1rem;
  min-height: 500px;
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

/* CHARACTER */
.sprite-character {
  display: grid;
  gap: 1rem;
  justify-content: center;
}
.sprite-character > span {
  display: flex;
  gap: 1rem;
}

@media (max-width: 780px) {
  .menu-container {
    gap: 1.5rem;
  }
  .sprite-character > span {
    display: grid;
    font-size: 14px;
  }
}
</style>
