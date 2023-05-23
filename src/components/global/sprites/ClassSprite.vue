<script setup lang="ts">
defineEmits(['activeClass'])
defineProps<{ name: string; gender: string; isActive: boolean }>()
</script>

<template>
    <div>
        <img
            :alt="name"
            :src="`../resources/sprites/${gender}/${name}.svg`"
            @click="$emit('activeClass', name)"
        />
    </div>
</template>

<style scoped>
img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: all 0.5s;
    transform: rotateY(180deg);
}
img:hover {
    filter: brightness(1.2);
    transform: rotateY(180deg) scale(1.1);
}
@media (max-width: 780px) {
    img {
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>
