<script setup lang="ts">
import { defineProps, onBeforeMount, ref } from "vue";
import { CharacterService } from "core/services/character-service";
import { Helpers } from "core/helpers/helpers";
import SetupProfile from "setup/page.profile.json";
import CharacterSprite from "comp/global/sprites/CharacterSprite.vue";

defineProps<{ rotateY?: boolean }>();

onBeforeMount(async () => {
  const { charName, className, level, gender } = await CharacterService.get();

  Object.assign(data.value, { charName, className, level, gender });
});

const spriteInfo = SetupProfile[Helpers.translate()].sprite;

const data = ref({
  level: "1",
  gender: "man",
  charName: "loading",
  className: "peasant",
});
</script>

<template>
  <div class="sprite-character">
    <CharacterSprite
      :name="data.className"
      :gender="data.gender"
      :rotate-y="rotateY || false"
    />
    <span>
      <strong>{{ data.charName }}</strong>
      <span>
        <p>
          {{ spriteInfo.levelLabel }} - {{ data.level }} /
          {{ data.className }}
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
