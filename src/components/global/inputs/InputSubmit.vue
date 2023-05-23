<script setup lang="ts">
defineProps<{ label: string; isDisabled?: boolean }>()
</script>

<template>
    <div>
        <input type="submit" :value="label" :disabled="isDisabled" />
    </div>
</template>

<style scoped>
div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
input {
    width: 180px;
    height: 40px;
    align-content: center;
    background: #d9d9d9;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    align-self: center;
    padding: auto;
}
input:hover {
    background-color: white;
    transition: all 0.5s;
}
input:disabled {
    background-color: grey;
    cursor: progress;
}
@media (max-width: 780px) {
    input {
        font-size: 16px;
    }
}
</style>
