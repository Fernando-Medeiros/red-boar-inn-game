<script lang="ts">
import { defineComponent, PropType } from "vue";
import IconButton from "comp/global/button/icon-button.comp.vue";
import IconStatic from "comp/global/sprite/icon-static.comp.vue";

type Icon = {
  icon: string;
  label: string;
  route?: string;
};

export default defineComponent({
  name: "HeaderGame",
  components: { IconStatic, IconButton },
  props: {
    gold: { type: String, required: true },
    jewel: { type: String, required: true },

    iconsButton: {
      type: Array as PropType<Icon[]>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="background-banner">
    <div class="main-container">
      <div class="banner-status-container">
        <div>
          <IconStatic :name="'gold'" :label="gold" />
          <IconStatic :name="'jewel'" :label="jewel" />
        </div>

        <div class="banner-nav-icons">
          <IconButton
            v-for="icon in iconsButton"
            :key="icon.icon"
            :name="icon.icon"
            :label="icon.label"
            :to-route="icon.route"
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
  justify-content: space-between;
}
.banner-nav-icons {
  display: flex;
  gap: 1rem;
}
</style>
