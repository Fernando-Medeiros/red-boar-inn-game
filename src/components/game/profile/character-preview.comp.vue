<script lang="ts">
import { defineComponent } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupProfile from "setup/page.profile.json";
import Sprite from "comp/global/sprite/sprite.comp.vue";

export default defineComponent({
  name: "CharacterPreview",
  components: { Sprite },

  async beforeCreate() {
    const { charName, className, level, gender } = await CharacterService.get();

    Object.assign(this.$data, { charName, className, level, gender });
  },
  computed: {
    spriteInfo() {
      const {
        sprite: { levelLabel },
      } = SetupProfile[Helpers.translate()];

      return { levelLabel };
    },
  },
  data() {
    return {
      charName: "loading",
      className: "peasant",
      level: "1",
      gender: "man",
    };
  },
});
</script>

<template>
  <div class="sprite-character">
    <Sprite
      :sprite-name="className"
      :sprite-gender="gender"
      :rotate-y="false"
    />
    <span>
      <p>{{ charName }}</p>
      <span>
        <p>
          {{ spriteInfo.levelLabel }} - {{ level }} /
          {{ className }}
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
