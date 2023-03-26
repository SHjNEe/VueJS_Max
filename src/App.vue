<template>
  <StoredResource :resource="storedResources" />
</template>

<script>
import StoredResource from "./components/learning-resource/StoredResource.vue";
export default {
  components: {
    StoredResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The offical Vue.js documentation",
          link: "https://vue.js",
        },
        {
          id: "google",
          title: "Google",
          description: "The Google search page",
          link: "https://google.com",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
