<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import { ManagerCharacter } from "core/entities/manager-character";

import SetupProfile from "setup/page.profile.json";

import Sprite from "comp/global/sprite/sprite.comp.vue";
import IconButton from "comp/global/button/icon-button.comp.vue";

function getSetup() {
  return SetupProfile[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "ProfileView",
  components: { Sprite, IconButton },

  data() {
    return {
      character: {
        getName: "",
        getClass: "",
        getLevel: "",
        getGender: "",
      },
      spriteInfo: getSetup().sprite,
      menuInfo: getSetup().menu,
    };
  },
  created() {
    const characterData = ManagerCharacter.character();

    Object.assign(this.character, {
      getLevel: characterData.getLevel,
      getName: characterData.getName,
      getClass: characterData.getClass,
      getGender: characterData.getGender,
    });
  },
});
</script>

<template>
  <div class="background-game">
    <div class="main-container">
      <div class="menu-container">
        <div class="menu-top-one-icon">
          <IconButton
            :name="menuInfo.status.icon"
            :label="menuInfo.status.label"
            :to-route="'/character/status'"
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
              :sprite-name="character.getClass"
              :sprite-gender="character.getGender"
              :rotate-y="false"
            />
            <span>
              <p>{{ character.getName }}</p>
              <span>
                <p>
                  {{ spriteInfo.levelLabel }} - {{ character.getLevel }} /
                  {{ character.getClass }}
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
            :to-route="'/character/options'"
          />
        </div>

        <div class="menu-bottom-one-icon">
          <IconButton
            :name="menuInfo.classes.icon"
            :label="menuInfo.classes.label"
            :to-route="'/character/class'"
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

.sprite-character {
  display: grid;
  gap: 1rem;
  justify-content: center;
}
.sprite-character > span {
  display: flex;
  gap: 1rem;
  text-align: center;
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
