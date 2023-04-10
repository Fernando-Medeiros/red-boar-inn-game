<script lang="ts">
import { defineComponent } from "vue";
import { LocalStorage, Languages } from "core/middlewares/language";

export default defineComponent({
  name: "LanguageButtonComponent",
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
      LocalStorage.setLanguage(lang as Languages);
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
        @click="setLanguage(lang)"
        :src="require(`assets/icons/${lang}.png`)"
        :alt="lang"
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
  width: 2.5rem;
  height: 2.5rem;
}
.language-container:hover > .language-options {
  display: flex;
  flex-direction: column;
  position: fixed;
}
.language-options {
  display: none;
  background-color: #222222;
}
.language-options > img {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
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
    width: 2rem;
    height: 2rem;
  }
  .language-options > img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
