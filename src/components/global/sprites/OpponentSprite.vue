<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ name: string; level: number; rotateY: boolean }>()

const sprite = ref()

watch(props, () => {
    sprite.value.alt = props.name
    sprite.value.style.transform = props.rotateY ? 'rotateY(180deg)' : ''
    sprite.value.src = `../assets/opponents/${props.name}.svg`
})
</script>

<template>
    <div>
        <img ref="sprite" />

        <span>
            <strong>{{ name }}</strong>
            <p>Level - {{ level }}</p>
        </span>
    </div>
</template>

<style scoped>
div {
    display: grid;
    gap: 1rem;
    justify-content: center;
    align-items: center;
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
    display: flex;
    gap: 1rem;
    text-align: center;
    color: white;
}
@media (max-width: 780px) {
    img {
        width: 4rem;
        height: 4rem;
    }
    span {
        display: grid;
        font-size: 14px;
    }
}
</style>
