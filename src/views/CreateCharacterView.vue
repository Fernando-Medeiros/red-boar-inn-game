<script lang="ts">
import { defineComponent } from "vue";
import CreateCharacterMainComponent from "comp/view-create-character/create-character.main.comp.vue";

export default defineComponent({
  name: "CreateCharacterView",
  components: { CreateCharacterMainComponent },
});
</script>

<template>
  <CreateCharacterMainComponent />
</template>
