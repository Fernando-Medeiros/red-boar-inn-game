<script setup lang="ts">
defineProps<{
    updates: { version: number; date: string; description: string[] }[]
}>()

function displayUpdate(id: number | string) {
    const updateBox = document.getElementById(id.toString())

    if (updateBox) {
        updateBox.style.display = updateBox.style.display != 'flex' ? 'flex' : ''
    }
}
</script>

<template>
    <div class="update-container" v-for="update in updates" :key="update.version">
        <button class="update-button" @click="displayUpdate(update.version)">
            <span class="version">
                <p>v-{{ update.version.toFixed(1) }}</p>

                <p>{{ update.date }}</p>
            </span>
        </button>

        <span class="update-preview-hidden" :id="update.version.toString()">
            <ul>
                <li v-for="updateDescription in update.description" :key="updateDescription">
                    {{ updateDescription }}
                </li>
            </ul>
        </span>
    </div>
</template>

<style scoped>
.update-container {
    width: 600px;
    border-radius: 10px;
    color: #222222;
    background-color: #e8e8e8;
}
.update-container:hover {
    background-color: white;
}
.update-button {
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: transparent;
}
.version {
    display: grid;
    gap: 1rem;
    text-align: left;
    font-size: 16px;
    grid-template-columns: 0.1fr 1fr;
}
.update-preview-hidden {
    display: none;
    word-wrap: break-word;
    padding-inline: 10px;
    padding-block: 10px;
    border-top: 1px solid #222222;
}
.update-preview-hidden li {
    margin-top: 5px;
    list-style: none;
}
@media (max-width: 780px) {
    .update-container {
        width: 95%;
    }
}
</style>
