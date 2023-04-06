<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputSubmitComponent",
  props: {
    placeholder: String,
  },
});
</script>

<template>
  <div class="input-submit-container">
    <input
      class="input-submit input-submit-text"
      type="submit"
      :value="placeholder"
    />
  </div>
</template>

<style scoped>
.input-submit-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-submit {
  width: 180px;
  height: 30px;
  align-content: center;
  border-radius: 0.5rem;
  background: #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
}
.input-submit-text {
  font-size: 20px;
  text-align: center;
  align-self: center;
  margin: auto;
  padding: auto;
}
.input-submit:hover {
  background-color: burlywood;
  transition: all 0.5s;
}

@media (max-width: 780px) {
  .input-submit {
    width: 115px;
    height: 38px;
    padding: 10px;
  }
  .input-submit-text {
    font-size: 16px;
  }
}
</style>
