<script lang="ts">
import { defineComponent } from "vue";
import { HandlerCharacter } from "core/entities/handler-character";

import Sprite from "comp/global/sprite/sprite.comp.vue";
import StatusOverview from "comp/game/status/status-overview.comp.vue";

export default defineComponent({
  name: "StatusView",
  components: { Sprite, StatusOverview },

  data() {
    return {
      character: {
        getName: "",
        getClass: "",
        getLevel: "",
        getGender: "",
      },
    };
  },
  created() {
    const characterData = HandlerCharacter.character();

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
      <div class="status-container">
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
                {{ character.getLevel }} /
                {{ character.getClass }}
              </p>
            </span>
          </span>
        </div>

        <StatusOverview />
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-container {
  display: grid;
  gap: 1rem;
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
  .sprite-character > span {
    display: grid;
    font-size: 14px;
  }
}
</style>
