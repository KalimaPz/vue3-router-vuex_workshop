<template>
  <v-app class="app" dark>
    <div v-if="biography.length == 0">
      <Loading />
    </div>

    <div v-else>
      <div>
        <NavBar />
        <div class="content">
          <ProfilePicture :avatar_url="avatar_url" />
          <MyInfo
            title="Info"
            :info="biography[0].info"
            :lifestyle="biography[0].lifestyle"
            :interesting="biography[0].interesting"
            :story="biography[0].story"
          />
          <SkillsChart
            title="Skills"
            :skills="biography[0].skills"
            id="section-skill"
          />
          <WorkExperience :workingExp="biography[0].working_exp" />
        </div>
        <Footer/>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
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
    MyInfo,
    NavBar,
    ProfilePicture,
    SkillsChart,
    Loading,
    WorkExperience,
    Footer
  },
  data() {
    return {
      biography: [],
      avatar_url: "",
      num: 9,
      text: ""
    };
  },
  methods: {
    async fetchMyData() {
      let ownerData = await axios.get(
        "https://resume-backend-services.herokuapp.com/api/person"
      );
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
    }
  },
  mounted() {
    this.fetchMyData();
    this.fetchGithubData();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap");
h2 {
  color: black;
}
.app {
  font-family: "Kanit", sans-serif;
}

.nav-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.info {
  padding: 20px;
}
</style>
