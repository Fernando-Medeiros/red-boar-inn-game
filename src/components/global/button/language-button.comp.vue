<script lang="ts">
import { defineComponent } from "vue";
import type { LanguagesSchema } from "core/schemas/language.schema";
import { LocalStorage } from "core/storage/local.storage";

export default defineComponent({
  name: "LanguageButton",
  data() {
    return {
      currentLanguage: "",
      listLanguages: ["br", "en"],
    };
  },
  created() {
    this.currentLanguage = LocalStorage.getLanguage();
  },
  methods: {
    setLanguage(lang: string) {
      LocalStorage.setLanguage(lang as LanguagesSchema);
      location.reload();
    },
  },
});
</script>

<template>
  <div class="language-container">
    <div class="current-option">
      <img
        :src="require(`assets/icons/${currentLanguage}.png`)"
        :alt="currentLanguage"
      />
    </div>

    <span class="language-options">
      <img
        v-for="lang in listLanguages"
        :key="lang"
        :src="require(`assets/icons/${lang}.png`)"
        :alt="lang"
        @click="setLanguage(lang)"
      />
    </span>
  </div>
</template>

<style scoped>
.language-container {
  height: auto;
  margin-left: 3rem;
  align-items: center;
  cursor: pointer;
}
.current-option > img {
  width: 2rem;
  height: 2rem;
  padding: 0 10px;
  border-radius: 1rem;
}
.language-container:hover > .language-options {
  display: flex;
  flex-direction: column;
  position: fixed;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.language-options {
  display: none;
  padding: 0 10px;
  background: linear-gradient(#282828e1, #323232a1);
}
.language-options > img {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 1s;
}
.language-options > img:hover {
  transform: scale(1.2);
  transition: all 0.5s;
}

@media (max-width: 768px) {
  .language-container {
    margin-left: 1rem;
  }
  .current-option > img {
    padding: 0 3px;
  }
  .language-options {
    padding: 0 3px;
  }
}
</style>
