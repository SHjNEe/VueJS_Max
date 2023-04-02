<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["users", "teams"],
  components: {
    UserItem,
  },
  props: ["teamId"],
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    // $route(newRouter, oldRouter) {
    //   this.loadTeamMembers(newRouter);
    // },
    teamId(newTeamId, oldTeamId) {
      this.loadTeamMembers(newTeamId);
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   const boo = true;
  //   if (boo) {
  //     next();
  //   } else {
  //     next({ name: "teams" });
  //   }
  // },

  // beforeRouteUpdate(to, from, next) {
  //   this.loadTeamMembers(to.params.teamId);
  //   next();
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
