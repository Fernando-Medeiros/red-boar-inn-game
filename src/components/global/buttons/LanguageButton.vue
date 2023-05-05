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
  <div class="language-button-container">
    <img
      class="icon-language"
      :src="require(`assets/icons/${currentLanguage}.svg`)"
      :alt="currentLanguage"
    />

    <span class="options">
      <img
        class="icon-language"
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
.language-button-container {
  padding-inline: 10px;
}
.icon-language {
  width: 2rem;
  border-radius: 1rem;
}
.language-button-container:hover > .options {
  display: grid;
  position: fixed;
}
.options {
  display: none;
  background-color: var(--cor-background-color);
}
.options > img {
  cursor: pointer;
}
.options > img:hover {
  filter: brightness(1.2);
}
</style>
