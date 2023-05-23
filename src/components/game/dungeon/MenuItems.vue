<script setup lang="ts">
import { reactive, defineEmits } from 'vue'
import Items from 'core/database/items.json'
import ItemSprite from 'comp/global/sprites/ItemSprite.vue'

defineEmits(['emitItem'])

const items = reactive(Items.consumables)

function consumeItem(itemName: string) {
    items.filter((I) => {
        if (I.name === itemName) I.total--
    })
}
</script>

<template>
    <div class="items-container">
        <div class="item-box" v-for="item in items" :key="item.name">
            <div class="item-name">
                <ItemSprite :name="item.name" />

                <p>{{ item.name }}</p>
            </div>

            <div class="item-description">
                <span class="item-attribute">
                    <p>type</p>
                    <p>{{ item.type }}</p>
                </span>

                <span class="item-attribute">
                    <p>total</p>
                    <p>{{ item.total }}</p>
                </span>

                <span class="item-attribute">
                    <p>restore</p>
                    <p>{{ item.restore }}</p>
                </span>

                <span class="item-attribute">
                    <p>value</p>
                    <p>{{ item.value }}</p>
                </span>
            </div>

            <button class="item-button" @click="$emit('emitItem', item), consumeItem(item.name)">
                use
            </button>
        </div>
    </div>
</template>

<style scoped>
.items-container {
    display: flex;
    gap: 1rem;
    padding-block: 1rem;
    height: max-content;
    margin: auto;
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
.item-attribute {
    display: flex;
    gap: 1rem;
    padding: 5px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(245, 245, 245, 0.356);
}
.item-button {
    padding: 10px;
    color: white;
    border-radius: 10px;
    border: 1px solid white;
    background: transparent;
    cursor: pointer;
}
.item-button:hover {
    background-color: rgba(245, 245, 245, 0.356);
}

@media (max-width: 780px) {
    .items-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>
