<script lang="ts">
import { defineComponent } from "vue";
import { StatusService } from "core/api/status-service";
import { Status } from "core/entities/status/status";
import { Helpers } from "core/helpers/functions-helpers";
import SetupStatus from "setup/page.status.json";

export default defineComponent({
  name: "StatusOverview",

  async beforeCreate() {
    const status = new Status(await StatusService.get());

    Object.assign(this.$data, status.toJson());
  },
  data() {
    return {
      points: 0,
      experience: 1,
      strength: 1,
      intelligence: 1,
      dexterity: 1,
      vitality: 1,
      health: 1,
      energy: 1,
      currentHealth: 1,
      currentEnergy: 1,

      setupInfo: { ...SetupStatus[Helpers.getLanguage()] },
    };
  },
});
</script>

<template>
  <div>
    <span class="status-overview">
      <p>
        {{ setupInfo.points.label }}
      </p>
      {{ points }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.experience.label }}
      </p>
      {{ experience }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.strength.label }}
      </p>
      {{ strength }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.intelligence.label }}
      </p>
      {{ intelligence }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.dexterity.label }}
      </p>
      {{ dexterity }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.vitality.label }}
      </p>
      {{ vitality }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.health.label }}
      </p>
      {{ health }}
    </span>
    <span class="status-overview">
      <p>
        {{ setupInfo.energy.label }}
      </p>
      {{ energy }}
    </span>
  </div>
</template>

<style scoped>
.status-overview {
  display: flex;
  padding: 10px;
  max-width: 300px;
  margin: auto;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
}
@media (max-width: 780px) {
}
</style>
