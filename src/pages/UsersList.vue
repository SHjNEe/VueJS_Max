<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>

    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ["users"],
  methods: {
    confirmInput() {
      // do something
      this.$router.push("/teams");
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   const boo = false;
  //   if (boo) {
  //     next();
  //   } else {
  //     next({ name: "team-members", params: { teamId: "t1" } });
  //     // next();
  //   }
  // },
  // unmounted() {
  //   console.log("Hi");
  // },
  beforeRouteLeave(to, from, next) {
    if (!this.changesSaved) {
      const userWantoLeave = confirm("Are you sure? You got unsaved changes!");
      // prompt("Are you sure? You got unsaved changes!");
      next(userWantoLeave);
    } else {
      next();
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
