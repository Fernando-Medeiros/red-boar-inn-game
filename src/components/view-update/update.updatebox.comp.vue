<script lang="ts">
import { defineComponent } from "vue";
import updates from "@/../updates.json";

export default defineComponent({
  name: "UpdateBoxComponent",
  data() {
    return {
      updates: updates,
    };
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
  <div class="container-updates">
    <div class="box" v-for="update in updates" :key="update.version">
      <div class="box-button">
        <p>
          <strong>V-{{ update.version }}</strong> __ {{ update.date }}
        </p>

        <button @click="displayUpdate(update.version)">v</button>
      </div>

      <span class="box-hidden" :id="update.version.toString()">
        {{ update.description }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.container-updates {
  z-index: 1;
  display: grid;
  gap: 20px;
  padding: 10px;
  justify-self: center;
  border-radius: 0.5rem;
  background-color: #222222;
}
.box {
  width: 500px;
  height: auto;
  padding: 10px;
  color: #222222;
  border-radius: 5px;
  background-color: #e8e8e8;
}
.box-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.box-button button {
  width: 5rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: transparent;
}
.box-hidden {
  display: none;
  word-wrap: break-word;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 10px;
  border-top: 1px solid #222222;
}

.box:hover {
  background-color: white;
}
.box-button button:hover,
.box-button button:focus {
  border-left: 2px solid #222222;
  border-right: 2px solid #222222;
}
@media (max-width: 780px) {
  .box {
    width: auto;
    height: auto;
    border-radius: 5px;
  }
  .box-button button {
    width: 3rem;
  }
  .box-button p {
    font-size: 14px;
  }
  .box-hidden {
    padding-top: 10px;
    padding-left: 0;
  }
}
</style>
