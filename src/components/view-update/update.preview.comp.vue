<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpdatePreview",
  props: {
    updates: { type: Object, required: true },
  },
  methods: {
    displayUpdate(id: number | string) {
      const updateBox = document.getElementById(id.toString());

      if (updateBox != null) {
        updateBox.style.display != "flex"
          ? (updateBox.style.display = "flex")
          : (updateBox.style.display = "");
      }
    },
  },
});
</script>

<template>
  <div
    class="updates-container"
    v-for="update in updates"
    :key="update.version"
  >
    <div class="updates-button">
      <p>
        <strong>V-{{ update.version }}</strong> __ {{ update.date }}
      </p>

      <button @click="displayUpdate(update.version)">v</button>
    </div>

    <span class="updates-preview-hidden" :id="update.version.toString()">
      <ul>
        <li
          v-for="updateDescription in update.description"
          :key="updateDescription"
        >
          {{ updateDescription }}
        </li>
      </ul>
    </span>
  </div>
</template>

<style scoped>
.updates-container {
  width: 600px;
  height: auto;
  padding: 10px;
  color: #222222;
  border-radius: 5px;
  background-color: #e8e8e8;
}
.updates-container:hover {
  background-color: white;
}
.updates-button {
  display: flex;
  justify-content: space-between;
}
.updates-button button {
  width: 5rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: transparent;
}
.updates-button button:hover,
.updates-button button:focus {
  border-left: 2px solid #222222;
  border-right: 2px solid #222222;
}
.updates-preview-hidden {
  display: none;
  word-wrap: break-word;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 10px;
  border-top: 1px solid #222222;
}
.updates-preview-hidden li {
  margin-top: 5px;
  list-style: none;
}
@media (max-width: 780px) {
  .updates-container {
    width: 90%;
  }
  .updates-button button {
    width: 3rem;
  }
  .updates-button p {
    font-size: 14px;
  }
  .updates-preview-hidden {
    padding-top: 10px;
    padding-left: 0;
  }
}
</style>
