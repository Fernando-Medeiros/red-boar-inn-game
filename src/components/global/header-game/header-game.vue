<script lang="ts">
import { defineComponent } from "vue";
import { Helpers } from "core/helpers/helpers";
import SetupHeaderGame from "setup/global.header-game.json";
import IconButton from "comp/global/button/icon-button.vue";

export default defineComponent({
  name: "HeaderGame",
  components: { IconButton },

  computed: {
    menuIcons() {
      return SetupHeaderGame[Helpers.translate()].icons;
    },
  },
});
</script>

<template>
  <div class="background-banner">
    <div class="main-container">
      <div class="banner-status-container">
        <div class="banner-nav-icons">
          <IconButton
            v-for="icon in menuIcons"
            :key="icon.name"
            :name="icon.name"
            :label="icon.label"
            :to-route="icon.path"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-banner {
  background: linear-gradient(#282828, #323232c0);
}
.banner-status-container {
  display: flex;
  padding: 5px 1rem;
  align-items: center;
  justify-content: flex-end;
}
.banner-nav-icons {
  display: flex;
  gap: 1rem;
}
</style>
