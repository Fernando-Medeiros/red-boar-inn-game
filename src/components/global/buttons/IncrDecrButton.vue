<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    attrName: string
    maxValue: number
    type: 'increment' | 'decrement'
}>()

const emit = defineEmits(['updateValue'])

const sprite = ref()

onMounted(() => {
    Object.assign(sprite.value, {
        alt: props.type,
        src: `../assets/icons/${props.type}.svg`
    })
})
</script>

<template>
    <div>
        <img
            ref="sprite"
            :class="maxValue <= 1 && type === 'increment' ? 'disabled' : 'enable'"
            @click="emit('updateValue', attrName)"
        />
    </div>
</template>

<style scoped>
div {
    display: grid;
    gap: 5px;
    width: min-content;
    justify-content: center;
    text-align: center;
}
.enable,
.disabled {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
.disabled {
    filter: grayscale(2);
    cursor: default;
}
</style>
