<template>
  <div>
    <div>{{ info }}</div>
    <div>{{ skills }}</div>
    <div>{{ lifestyle }}</div>
    <div>{{ interesting }}</div>
    <div>{{ working_exp }}</div>
    <div>{{ story }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      info: {},
      skills: {},
      lifestyle: [],
      interesting: [],
      working_exp: [],
      story: ""
    };
  },
  methods: {
    async fetchMyData() {
      let myData = await axios.get(
        "https://resume-backend-services.herokuapp.com/api/person"
      );
      this.info = myData.data[0].info;
      this.skills = myData.data[0].skills;
      this.lifestyle = myData.data[0].lifestyle;
      this.interesting = myData.data[0].interesting;
      this.working_exp = myData.data[0].working_exp;
      this.story = myData.data[0].story;
    }
  },
  mounted() {
    this.fetchMyData();
  }
};
</script>
<style scoped>
</style>
