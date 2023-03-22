<template>
  <form @submit.prevent="addContact">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Email</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  //   emits: ["add-contact"],
  methods: {
    addContact() {
      const newContact = {
        id: this.name,
        name: this.name,
        email: this.email,
        phone: this.phone,
        isFavorite: false,
      };
      this.$emit("add-contact", newContact);
    },
  },
};
</script>
