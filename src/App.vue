<template>
  <v-app class="app">
    <div v-if="biography.length != 0">
      <NavBar />
      <ProfilePicture :avatarUrl="avatar_url" />
      <MyInfo title="Info" :info="biography[0].info" :lifestyle="biography[0].lifestyle" :interesting="biography[0].interesting" :story="biography[0].story" />
      <SkillsChart title="Skills" :skills="biography[0].skills" id="section-skill" class="screen-expanded" />

      <WorkExperience :workingExp="biography[0].working_exp" />

      <Footer />
    </div>
    <div v-else>
      <Loading />
    </div>
  </v-app>

  <!--
          <MyInfo
            title="Info"
            :info="biography[0].info"
            :lifestyle="biography[0].lifestyle"
            :interesting="biography[0].interesting"
            :story="biography[0].story"
          />

          -->
  <!---
          
          <SkillsChart
            title="Skills"
            :skills="biography[0].skills"
            id="section-skill"
          />

          -->

  <!-- 
          <WorkExperience :workingExp="biography[0].working_exp" />
          -->
</template>

<script>
import axios from "axios";
// import LandingPage from "./components/views/LandingPage";
import MyInfo from "./components/MyInfo";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import ProfilePicture from "./components/ProfilePicture";

import SkillsChart from "./components/SkillsChart";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    // LandingPage,
    MyInfo,
    NavBar,
    ProfilePicture,
    SkillsChart,
    Loading,
    WorkExperience,
    Footer,
  },
  data() {
    return {
      biography: [],
      avatar_url: "",
      num: 9,
      text: "",
    };
  },
  methods: {
    async fetchMyData() {
      let ownerData = await axios.get("https://resume-backend-services.herokuapp.com/api/person");
      console.log(ownerData.data);
      this.biography = ownerData.data;
    },
    async fetchGithubData() {
      let githubData = await axios.get(`https://api.github.com/users/KalimaPz`);
      console.log(githubData.data.avatar_url);
      this.avatar_url = githubData.data.avatar_url;
    },
    add() {
      this.num++;
    },
  },
  mounted() {
    this.fetchMyData();
    this.fetchGithubData();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap");

.app {
  font-family: "Kanit", sans-serif;
}
</style>
