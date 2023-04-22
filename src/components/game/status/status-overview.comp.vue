<script lang="ts">
import { defineComponent } from "vue";
import { StatusService } from "core/api/status-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupStatus from "setup/page.status.json";
import SetupResponses from "setup/global.responses.json";
import InputSubmit from "comp/global/input/input-submit.comp.vue";
import AddButton from "comp/global/button/add-button-comp.vue";

export default defineComponent({
  name: "StatusOverview",
  emits: ["emitMessage"],
  components: { AddButton, InputSubmit },

  async beforeCreate() {
    const {
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
    } = await StatusService.get();

    Object.assign(this.statusPrimary, {
      points,
      strength,
      intelligence,
      vitality,
      dexterity,
    });
    Object.assign(this.statusSecondary, {
      experience,
      health,
      energy,
      currentHealth,
      currentEnergy,
    });
  },

  data() {
    return {
      statusPrimary: {
        points: 0,
        strength: 1,
        intelligence: 1,
        dexterity: 1,
        vitality: 1,
      },
      statusSecondary: {
        experience: 1,
        health: 1,
        energy: 1,
        currentHealth: 1,
        currentEnergy: 1,
      },
      submitForm: false,
      statusInfo: { ...SetupStatus[Helpers.getLanguage()] },
    };
  },
  methods: {
    async updateStatus() {
      this.blockInputSubmit();

      const {
        status: { success, error },
      } = SetupResponses[Helpers.getLanguage()].updates;

      const { status } = await StatusService.update(this.statusPrimary);

      this.$emit("emitMessage", status === 204 ? success : error);

      this.blockInputSubmit();
    },

    blockInputSubmit() {
      this.submitForm = !this.submitForm;
    },

    incrementPoints(
      value: "strength" | "intelligence" | "dexterity" | "vitality"
    ) {
      this.statusPrimary.points > 1
        ? [this.statusPrimary.points--, this.statusPrimary[value]++]
        : "";
    },

    decrementPoints(
      value: "strength" | "intelligence" | "dexterity" | "vitality"
    ) {
      this.statusPrimary[value] > 1
        ? [this.statusPrimary.points++, this.statusPrimary[value]--]
        : "";
    },
  },
});
</script>

<template>
  <div class="status-container">
    <form @submit.prevent="updateStatus">
      <div
        class="status-overview"
        v-for="(value, name) in statusPrimary"
        :key="name"
      >
        <p>{{ statusInfo[name].label }}</p>

        <p>{{ value }}</p>

        <div class="status-buttons" v-if="!name.includes('points')">
          <AddButton
            :type="'decrement'"
            :attr-name="name"
            :max-value="statusPrimary.points"
            @update-value="decrementPoints"
          />
          <AddButton
            :type="'increment'"
            :attr-name="name"
            :max-value="statusPrimary.points"
            @update-value="incrementPoints"
          />
        </div>
      </div>

      <InputSubmit
        :label="statusInfo.form.submit.label"
        :is-disabled="submitForm"
        :style="'margin-top: 2rem;'"
      />
    </form>

    <div>
      <div
        class="status-overview"
        v-for="(value, name) in statusSecondary"
        :key="name"
      >
        <p>{{ statusInfo[name].label }}</p>

        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
@media (max-width: 780px) {
  .status-container {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
