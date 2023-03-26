<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <span v-if="goalErrorMessage">{{ goalErrorMessage }}</span>
    <button @click="setGoal">Set Goals</button>
    <teleport to="body">
      <error-alert v-if="inputIsValid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters!</p>
        <button @click="confirmError">Close</button>
      </error-alert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  data() {
    return {
      inputIsValid: false,
    };
  },
  components: {
    ErrorAlert,
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
    },
  },
};
</script>
