const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0987 334 433",
          email: "manuel@gmail.com",
        },
        {
          id: "loren",
          name: "Loren Lorenz",
          phone: "0987 334 433",
          email: "loren@gmail.com",
        },
        {
          id: "david",
          name: "David",
          phone: "0987 334 433",
          email: "david@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailIsVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-show="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0987 334 433",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
