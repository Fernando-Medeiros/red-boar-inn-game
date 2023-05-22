<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

onBeforeMount(() => {
  currentLanguage.value = localStorage.getItem("language") || "br";
});

const currentLanguage = ref("");
const listLanguages = ref(["br", "en"]);

function setLanguage(lang: string) {
  localStorage.setItem("language", lang);
  location.reload();
}
</script>

<template>
  <div class="language-btn-container">
    <img
      :src="require(`assets/icons/${currentLanguage}.svg`)"
      :alt="currentLanguage"
    />

    <span class="options">
      <img
        v-for="lang in listLanguages"
        :key="lang"
        :alt="lang"
        :src="require(`assets/icons/${lang}.svg`)"
        @click="setLanguage(lang)"
      />
    </span>
  </div>
</template>

<style scoped>
.language-btn-container {
  padding-inline: 10px;
}

.language-btn-container img,
.options img {
  width: 2rem;
  border-radius: 1rem;
}

.language-btn-container:hover > .options {
  display: grid;
  position: fixed;
}
.options {
  display: none;
  background-color: var(--cor-background-color);
}
.options > img:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
</style>
