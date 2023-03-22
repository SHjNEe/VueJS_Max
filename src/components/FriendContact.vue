<template>
  <li>
    <h2 @click="sayHello">{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    email: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: true,
      validator: function (value) {
        return value === true || value === false;
      },
    },
  },
  emits: ["setUser"],
  //Validation
  emits: {
    "set-user": function (id) {
      if (typeof id === "string") {
        return true;
      } else {
        return false;
      }
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorited: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      // this.$emit("set-user", this.id);
    },
    sayHello() {
      this.$emit("set-user", this.id);
    },
  },
};
</script>
