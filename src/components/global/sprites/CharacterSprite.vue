<script setup lang="ts">
defineProps<{ name: string; gender: string; rotateY: boolean }>()
</script>

<template>
    <div>
        <img
            :alt="name"
            :style="rotateY ? 'transform: rotateY(180deg)' : ''"
            :src="`../resources/sprites/${gender}/${name}.svg`"
        />

        <span></span>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: auto;
}
img {
    z-index: 1;
    position: relative;
    width: 118px;
    height: 113.28px;
    border-radius: 11px;
}
span {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 10rem;
    background: rgba(255, 199, 91, 0.5);
    filter: blur(25px);
}

@media (max-width: 780px) {
    img {
        width: 4rem;
        height: 4rem;
    }
    span {
        width: 3rem;
        height: 2.5rem;
    }
}
</style>
