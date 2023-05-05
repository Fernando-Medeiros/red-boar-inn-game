<script lang="ts">
import { defineComponent } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupProfile from "setup/page.profile.json";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";

export default defineComponent({
  name: "CharacterPreview",
  props: { rotateY: { type: Boolean, default: false } },
  components: { CharacterSprite },

  async beforeCreate() {
    const { charName, className, level, gender } = await CharacterService.get();

    Object.assign(this.$data, { charName, className, level, gender });
  },
  computed: {
    spriteInfo() {
      const { levelLabel } = SetupProfile[Helpers.translate()].sprite;
      return { levelLabel };
    },
  },
  data() {
    return {
      level: "1",
      gender: "man",
      charName: "loading",
      className: "peasant",
    };
  },
});
</script>

<template>
  <div class="sprite-character">
    <CharacterSprite :name="className" :gender="gender" :rotate-y="rotateY" />
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
  color: white;
}

@media (max-width: 780px) {
  .sprite-character > span {
    display: grid;
    font-size: 14px;
  }
}
</style>
