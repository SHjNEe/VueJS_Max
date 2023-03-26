<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveGoals from "./components/goals/ActiveGoals.vue";
import ManageGoals from "./components/goals/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
    // "the-header": TheHeader,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cpn) {
      this.selectedComponent = cpn;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
