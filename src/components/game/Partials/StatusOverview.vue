<script setup lang="ts">
import { defineEmits, onBeforeMount, reactive, ref, watch } from "vue";
import { StatusService } from "core/services/status-service";
import { Helpers } from "core/helpers/helpers";
import SetupStatus from "setup/page.status.json";
import SetupResponses from "setup/global.responses.json";
import InputSubmit from "comp/global/inputs/InputSubmit.vue";
import IncrDecrButton from "comp/global/buttons/IncrDecrButton.vue";
import StatusBar from "comp/global/helpers/StatusBar.vue";

type attributes = "strength" | "intelligence" | "dexterity" | "vitality";

const {
  status: { success, error },
} = SetupResponses[Helpers.translate()].updates;

const emit = defineEmits(["emitMessage"]);

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
      vitality,
    }) => {
      Object.assign(statusPrimary, {
        points,
        strength,
        intelligence,
        vitality,
        dexterity,
      });
      Object.assign(statusSecondary, {
        experience,
        health,
        energy,
        currentHealth,
        currentEnergy,
      });
    }
  );
});

const statusInfo = { ...SetupStatus[Helpers.translate()] };

const submitForm = ref(false);

const statusPrimary = reactive({
  points: 1,
  strength: 1,
  intelligence: 1,
  dexterity: 1,
  vitality: 1,
});
const statusSecondary = reactive({
  experience: 1,
  health: 1,
  energy: 1,
  currentHealth: 1,
  currentEnergy: 1,
});

async function updateStatus() {
  const { statusCode } = await StatusService.update({
    ...statusPrimary,
    ...statusSecondary,
  });

  emit("emitMessage", statusCode === 204 ? success : error);

  submitForm.value = !submitForm.value;
}

function incrementStatus(value: attributes) {
  if (statusPrimary.points > 1) statusPrimary.points--, statusPrimary[value]++;
}

function decrementStatus(value: attributes) {
  if (statusPrimary[value] > 1) statusPrimary.points++, statusPrimary[value]--;
}

watch(statusPrimary, () => {
  statusSecondary.health = statusPrimary.vitality * 10;
  statusSecondary.energy = statusPrimary.intelligence * 10;
});
</script>

<template>
  <div class="status-overview-container">
    <div class="status-secondary-container">
      <StatusBar
        :type="'health'"
        :size="'large'"
        :max-status="statusSecondary.health"
        :current-status="statusSecondary.currentHealth"
      />
      <StatusBar
        :type="'energy'"
        :size="'large'"
        :max-status="statusSecondary.energy"
        :current-status="statusSecondary.currentEnergy"
      />
      <StatusBar
        :type="'experience'"
        :size="'large'"
        :max-status="statusSecondary.experience"
        :current-status="statusSecondary.experience"
      />
    </div>

    <form @submit.prevent="updateStatus" @submit="submitForm = !submitForm">
      <div
        class="status-overview"
        v-for="(value, name) in statusPrimary"
        :key="name"
      >
        <p>{{ statusInfo[name].label }}</p>

        <p>{{ value }}</p>

        <div class="status-buttons" v-if="!name.includes('points')">
          <IncrDecrButton
            :type="'decrement'"
            :attr-name="name"
            :max-value="statusPrimary.points"
            @update-value="decrementStatus"
          />
          <IncrDecrButton
            :type="'increment'"
            :attr-name="name"
            :max-value="statusPrimary.points"
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
  </div>
</template>

<style scoped>
.status-overview-container {
  display: grid;
  gap: 2.5rem;
  padding-block: 1rem;
  color: white;
  background: var(--cor-background-linear-gradient),
    var(--cor-background-linear-gradient);
}

.status-overview {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 10px;
  height: 30px;
  max-width: 300px;
  margin: auto;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
}

.status-buttons {
  display: flex;
  justify-content: space-between;
}

.status-secondary-container {
  display: grid;
  justify-content: center;
  gap: 1.5rem;
}

@media (max-width: 780px) {
}
</style>
