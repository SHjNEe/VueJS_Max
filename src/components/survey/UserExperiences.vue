<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <div v-if="isLoading">Loading....</div>
      <p v-else-if="!isLoading && (!results || results.length == 0)">
        No experience was found!
      </p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
        <!-- <template v-if="isLoading">
          <div>Loading....</div>
        </template>
        <template v-if="!isLoading">
          <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          ></survey-result>
        </template> -->
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://vuejs-max-83afd-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.error = "Failed to fetch data - please try again later";
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
