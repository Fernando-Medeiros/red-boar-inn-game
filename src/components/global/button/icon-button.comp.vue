<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",
  emits: ["changeIcon"],
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    toRoute: { type: String, default: "" },
  },
  data() {
    return {
      id: Math.random().toString(),
    };
  },
  mounted() {
    if (!this.toRoute) {
      const icon = document.getElementById(this.id.toString());

      icon ? (icon.style.filter = "grayscale()") : null;
    }
  },
});
</script>

<template>
  <router-link :to="toRoute" class="icon-button-link">
    <div class="icon-button-container">
      <img
        class="icon-button"
        :id="id"
        :alt="name"
        :src="require(`assets/icons/${name}.png`)"
        @click="$emit('changeIcon')"
      />
      <span class="icon-button-label">
        <p :for="label">{{ label }}</p>
      </span>
    </div>
  </router-link>
</template>

<style scoped>
.icon-button-link {
  text-decoration: none;
}
.icon-button-link:hover {
  filter: brightness(1.3);
}

.icon-button-container {
  display: grid;
  gap: 10px;
  min-width: 86px;
  justify-content: center;
}
.icon-button {
  width: 3rem;
  height: 3rem;
  margin: auto;
  cursor: pointer;
}
.icon-button-label {
  color: white;
}
@media (max-width: 780px) {
  .icon-button {
    width: 2rem;
    height: 2rem;
  }
  .icon-button-label {
    font-size: 14px;
  }
}
</style>
