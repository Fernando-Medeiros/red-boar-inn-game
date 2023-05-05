<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

onBeforeMount(() => {
  data.value.currentLanguage = localStorage.getItem("language") || "br";
});

const data = ref({
  currentLanguage: "",
  listLanguages: ["br", "en"],
});

function setLanguage(lang: string) {
  localStorage.setItem("language", lang);
  location.reload();
}
</script>

<template>
  <div class="container">
    <div class="current">
      <img
        :src="require(`assets/icons/${data.currentLanguage}.svg`)"
        :alt="data.currentLanguage"
      />
    </div>

    <span class="options">
      <img
        v-for="lang in data.listLanguages"
        :key="lang"
        :alt="lang"
        :src="require(`assets/icons/${lang}.svg`)"
        @click="setLanguage(lang)"
      />
    </span>
  </div>
</template>

<style scoped>
.container {
  height: auto;
  margin-left: 3rem;
  align-items: center;
  cursor: pointer;
}
.current > img {
  width: 2rem;
  height: 2rem;
  padding: 0 10px;
  border-radius: 1rem;
}
.container:hover > .options {
  display: flex;
  flex-direction: column;
  position: fixed;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.options {
  display: none;
  padding: 0 10px;
  background: linear-gradient(#282828e1, #323232a1);
}
.options > img {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 1s;
}
.options > img:hover {
  transform: scale(1.2);
  transition: all 0.5s;
}

@media (max-width: 768px) {
  .container {
    margin-left: 1rem;
  }
  .current > img {
    padding: 0 3px;
  }
  .options {
    padding: 0 3px;
  }
}
</style>
