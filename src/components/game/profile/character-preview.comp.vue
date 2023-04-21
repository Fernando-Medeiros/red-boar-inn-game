<script lang="ts">
import { defineComponent } from "vue";
import { CharacterService } from "core/api/character-service";
import { Character } from "core/entities/character/character";
import { Helpers } from "core/helpers/functions-helpers";
import SetupProfile from "setup/page.profile.json";
import Sprite from "comp/global/sprite/sprite.comp.vue";

export default defineComponent({
  name: "CharacterPreview",
  components: { Sprite },

  async beforeCreate() {
    const char = new Character(await CharacterService.get());

    Object.assign(this.$data, {
      charName: char.getName,
      charClass: char.getClass,
      level: char.getLevel,
      gender: char.getGender,
    });
  },
  data() {
    return {
      charName: "unknown",
      charClass: "peasant",
      level: "1",
      gender: "man",
      spriteInfo: SetupProfile[Helpers.getLanguage()].sprite,
    };
  },
});
</script>

<template>
  <div class="sprite-character">
    <Sprite
      :sprite-name="charClass"
      :sprite-gender="gender"
      :rotate-y="false"
    />
    <span>
      <p>{{ charName }}</p>
      <span>
        <p>
          {{ spriteInfo.levelLabel }} - {{ level }} /
          {{ charClass }}
        </p>
      </span>
    </span>
  </div>
</template>

<style scoped>
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
