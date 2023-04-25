<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterContactIconComponent",
  props: {
    iconName: { type: String, required: true },
    link: { type: String, required: true },
  },
});
</script>

<template>
  <div>
    <a :href="link" target="_blank">
      <img
        class="image-contact"
        :alt="iconName"
        :src="require(`assets/icons/${iconName}.svg`)"
      />
    </a>
  </div>
</template>

<style scoped>
.image-contact {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 780px) {
}
</style>
