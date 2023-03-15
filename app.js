const app = Vue.createApp({
  data() {
    return {
      styleInput: "",
      styleClass: "",
      message: "",
      isHidden: false,
    };
  },
  methods: {
    setClass() {
      if (this.styleInput === "user1" || this.styleInput === "user2") {
        this.styleClass = this.styleInput;
        this.message = "";
      } else {
        this.styleInput = "";
        this.message = "Wrong input !!";
      }
    },
    showEl() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount("#assignment");
