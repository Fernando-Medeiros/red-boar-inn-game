<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage } from "core/middlewares/local-storage";
import { FullCharacter } from "core/entities/full-character";
import SetupProfile from "setup/page.profile.json";
import Sprite from "comp/global/sprite/sprite.comp.vue";
import IconButton from "comp/global/button/icon-button.comp.vue";
import IconStatic from "comp/global/sprite/icon-static.comp.vue";

function getSetup() {
  return SetupProfile[LocalStorage.getLanguage()];
}

export default defineComponent({
  name: "ProfileView",
  components: { IconStatic, Sprite, IconButton },

  data() {
    return {
      entity: new FullCharacter(),

      spriteInfo: getSetup().sprite,
      statusInfo: getSetup().barStatus,
      menuInfo: getSetup().menu,
    };
  },
});
</script>

<template>
  <div class="background-banner">
    <div class="main-container">
      <div class="banner-status-container">
        <div>
          <IconStatic
            :name="'gold'"
            :label="String(entity.inventory.findMaterial('gold')?.total)"
          />
          <IconStatic
            :name="'jewel'"
            :label="String(entity.inventory.findMaterial('jewel')?.total)"
          />
        </div>

        <IconButton
          :name="statusInfo.notification.icon"
          :label="statusInfo.notification.label"
        />
      </div>
    </div>
  </div>

  <div class="main-container">
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
              :sprite-name="entity.character.getClass"
              :sprite-gender="'man'"
              :rotate-y="false"
            />
            <span>
              <p>{{ entity.character.getName }}</p>
              <span>
                <p>
                  {{ spriteInfo.levelLabel }} -
                  {{ entity.character.getLevel }} /
                  {{ entity.character.getClass }}
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
/* BANNER STATUS */
.background-banner {
  margin-bottom: 1rem;
  background: linear-gradient(#282828, #323232c0);
}
.banner-status-container {
  display: flex;
  padding: 5px 1rem;
  align-items: center;
  justify-content: space-between;
}

/* MENU */
.background {
  z-index: 1;
  padding: 1rem;
  border-radius: 5px;
  background: linear-gradient(#282828, #323232c0);
}

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
