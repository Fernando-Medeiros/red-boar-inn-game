<script setup lang="ts">
import { reactive, defineEmits } from "vue";
import Items from "core/database/items.json";
import ItemSprite from "comp/global/sprites/ItemSprite.vue";

defineEmits(["emitItem"]);

const items = reactive(Items.consumables);

function consumeItem(itemName: string) {
  items.filter((I) => {
    if (I.name === itemName) I.total--;
  });
}
</script>

<template>
  <div class="menu-items-container">
    <div class="item-box" v-for="item in items" :key="item.name">
      <div class="item-name">
        <ItemSprite :name="item.name" />

        <p>{{ item.name }}</p>
      </div>

      <div class="item-description">
        <span>
          <p>type</p>
          <p>{{ item.type }}</p>
        </span>

        <span>
          <p>total</p>
          <p>{{ item.total }}</p>
        </span>

        <span>
          <p>restore</p>
          <p>{{ item.restore }}</p>
        </span>

        <span>
          <p>value</p>
          <p>{{ item.value }}</p>
        </span>
      </div>

      <button @click="$emit('emitItem', item), consumeItem(item.name)">
        use
      </button>
    </div>
  </div>
</template>

<style scoped>
.menu-items-container {
  color: white;
  display: flex;
  padding-block: 1rem;
  justify-content: space-evenly;
  border-block: 1px solid var(--cor-font-color);
}
.item-box {
  display: grid;
  padding: 10px;
  gap: 10px;
  border: 1px solid rgba(245, 245, 245, 0.356);
}
.item-name {
  display: grid;
  gap: 10px;
  justify-items: center;
}
.item-box div > span {
  display: flex;
  gap: 1rem;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(245, 245, 245, 0.356);
}
.item-box > button {
  padding: 10px;
  color: white;
  border-radius: 10px;
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
}
.item-box > button:hover {
  background-color: rgba(245, 245, 245, 0.356);
}

@media (max-width: 780px) {
  .menu-items-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
