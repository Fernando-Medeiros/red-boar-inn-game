<script setup lang="ts">
import { onBeforeMount, reactive, ref, watch } from 'vue'
import { StatusService } from 'core/services/status-service'
import Helpers from 'core/helpers/Helpers'
import SetupStatus from 'setup/page.status.json'
import SetupResponses from 'setup/global.responses.json'
import InputSubmit from 'comp/global/inputs/InputSubmit.vue'
import IncrDecrButton from 'comp/global/buttons/IncrDecrButton.vue'
import StatusBar from 'comp/global/helpers/StatusBar.vue'
import StatusPreview from './StatusPreview.vue'

type attributes = 'strength' | 'intelligence' | 'dexterity' | 'vitality'

onBeforeMount(async () => {
    await StatusService.get().then(
        ({
            experience,
            health,
            energy,
            currentHealth,
            currentEnergy,
            points,
            strength,
            intelligence,
            dexterity,
            vitality
        }) => {
            Object.assign(primary, {
                points,
                strength,
                intelligence,
                vitality,
                dexterity
            })
            Object.assign(secondary, {
                experience,
                health,
                energy,
                currentHealth,
                currentEnergy
            })
        }
    )
})

const {
    status: { success, error }
} = SetupResponses[Helpers.translate()].updates

const props = defineProps<{ level?: number }>()

const statusInfo = { ...SetupStatus[Helpers.translate()] }

const submitForm = ref(false)

const primary = reactive({
    points: 1,
    strength: 1,
    intelligence: 1,
    dexterity: 1,
    vitality: 1
})
const secondary = reactive({
    experience: 1,
    nextLevel: 1,
    health: 1,
    energy: 1,
    currentHealth: 1,
    currentEnergy: 1
})

async function updateStatus() {
    const { statusCode } = await StatusService.update({
        ...primary,
        ...secondary
    })
    Helpers.alertWithTimer(statusCode === 204 ? success : error, statusCode)

    submitForm.value = !submitForm.value
}

function incrementStatus(value: attributes) {
    if (primary.points > 1) primary.points--, primary[value]++
}

function decrementStatus(value: attributes) {
    if (primary[value] > 1) primary.points++, primary[value]--
}

watch(primary, () => {
    secondary.health = primary.vitality * 10
    secondary.energy = primary.intelligence * 10
    secondary.nextLevel = Number(props.level || 1) * 10
})
</script>

<template>
    <div class="status-overview-container">
        <div class="status-secondary">
            <StatusBar
                :type="'health'"
                :size="'large'"
                :max-status="secondary.health"
                :current-status="secondary.currentHealth"
            />
            <StatusBar
                :type="'energy'"
                :size="'large'"
                :max-status="secondary.energy"
                :current-status="secondary.currentEnergy"
            />
            <StatusBar
                :type="'experience'"
                :size="'large'"
                :max-status="secondary.nextLevel"
                :current-status="secondary.experience"
            />
        </div>

        <div class="status-primary-and-computed-container">
            <form @submit.prevent="updateStatus" @submit="submitForm = !submitForm">
                <div class="status-primary" v-for="(value, name) in primary" :key="name">
                    <p>{{ statusInfo[name].label }}</p>

                    <p>{{ value }}</p>

                    <div class="status-buttons" v-if="!name.includes('points')">
                        <IncrDecrButton
                            :type="'decrement'"
                            :attr-name="name"
                            :max-value="primary.points"
                            @update-value="decrementStatus"
                        />
                        <IncrDecrButton
                            :type="'increment'"
                            :attr-name="name"
                            :max-value="primary.points"
                            @update-value="incrementStatus"
                        />
                    </div>
                </div>

                <InputSubmit
                    :label="statusInfo.form.submit.label"
                    :is-disabled="submitForm"
                    :style="'margin-top: 2rem;'"
                />
            </form>

            <StatusPreview :status="reactive({ ...primary, ...secondary })" />
        </div>
    </div>
</template>

<style scoped>
.status-overview-container {
    display: grid;
    gap: 2.5rem;
    padding-block: 1rem;
    color: white;
    background: var(--cor-background-linear-gradient), var(--cor-background-linear-gradient);
}
.status-primary {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 10px;
    height: auto;
    max-width: 300px;
    margin: auto;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
}
.status-secondary {
    display: grid;
    gap: 1.5rem;
    justify-content: center;
}
.status-buttons {
    display: flex;
    justify-content: space-between;
}
.status-primary-and-computed-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 780px) {
    .status-primary-and-computed-container {
        gap: 1.5rem;
        grid-template-columns: 1fr;
    }
}
</style>
