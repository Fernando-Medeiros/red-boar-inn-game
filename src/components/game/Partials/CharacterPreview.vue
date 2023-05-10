<script setup lang="ts">
import { defineProps, defineEmits, onBeforeMount, reactive } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupProfile from "setup/page.profile.json";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";

onBeforeMount(async () => {
  const { charName, className, level, gender } = await CharacterService.get();
  Object.assign(character, { charName, className, level, gender });
});

defineProps<{ rotateY?: boolean }>();

const emit = defineEmits(["emitCharacter"]);

const { sprite: spriteInfo } = SetupProfile[Helpers.translate()];

const character = reactive({
  level: "1",
  gender: "man",
  charName: "loading",
  className: "peasant",
});

emit("emitCharacter", character);
</script>

<template>
  <div class="sprite-character">
    <CharacterSprite
      :name="character.className"
      :gender="character.gender"
      :rotate-y="rotateY || false"
    />
    <span>
      <strong>{{ character.charName }}</strong>
      <span>
        <p>
          {{ spriteInfo.levelLabel }} - {{ character.level }} /
          {{ character.className }}
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
