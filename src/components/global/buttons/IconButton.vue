<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ name: string; label: string; toRoute?: string }>()

const sprite = ref()

onMounted(() => {
    Object.assign(sprite.value, {
        alt: props.name,
        src: `../resources/icons/${props.name}.svg`,
        style: props.toRoute ? '' : 'filter: grayscale()'
    })
})
</script>

<template>
    <router-link :to="toRoute || ''">
        <div>
            <img ref="sprite" />
            <p>{{ label }}</p>
        </div>
    </router-link>
</template>

<style scoped>
a {
    text-decoration: none;
}
a:hover {
    filter: brightness(1.3);
}

div {
    display: grid;
    gap: 10px;
    min-width: 86px;
    justify-content: center;
    text-align: center;
}
img {
    width: 3rem;
    height: 3rem;
    margin: auto;
    cursor: pointer;
}
p {
    color: white;
}
@media (max-width: 780px) {
    img {
        width: 2rem;
        height: 2rem;
    }
    p {
        font-size: 14px;
    }
}
</style>
