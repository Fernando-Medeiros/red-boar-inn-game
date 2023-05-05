<script setup lang="ts">
import { Helpers } from "core/helpers/helpers";
import SetupAbout from "setup/page.about.json";
import BannerTitle from "comp/global/banners/BannerTitle.vue";
import BannerSprites from "comp/global/banners/BannerSprites.vue";

const title = SetupAbout[Helpers.translate()].title;
const articles = SetupAbout[Helpers.translate()].articles;
</script>

<template>
  <div>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'merchant'" :sprite-right="'merchant'" />

    <div class="main-background">
      <div class="main-container">
        <div class="about-container">
          <div
            class="content-container"
            v-for="article in articles"
            :key="article.title"
          >
            <h3 class="title">{{ article.title }}</h3>

            <span class="content">
              <p v-for="paragraph in article.content" :key="paragraph">
                {{ paragraph }}
              </p>
            </span>

            <span class="credits" v-if="article.links">
              <a
                v-for="author in article.links"
                :key="author?.name"
                :href="author?.link"
              >
                {{ author.name }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  z-index: 1;
  gap: 2rem;
  display: grid;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: var(--cor-background-color);
}

.content-container {
  padding-block: 2rem;
  padding-inline: 5rem;
  color: var(--cor-font-color);
}
.title {
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1rem;
}
.content {
  display: grid;
  gap: 10px;
  padding: 10px;
}
.credits {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.credits a {
  color: var(--cor-font-color);
}
.credits a:hover {
  color: burlywood;
}
@media (max-width: 780px) {
  .content-container {
    padding: 10px;
    padding-inline: 0;
  }
  .content {
    font-size: 14px;
  }
  .credits {
    display: grid;
    gap: 10px;
  }
}
</style>
