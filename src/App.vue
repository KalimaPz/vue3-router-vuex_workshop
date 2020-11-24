<template>
  <v-app class="app">
    <div v-if="biography.length != 0">
      <v-app-bar fixed dense dark flat>
        <v-col>KalimaPz</v-col>
        <v-spacer></v-spacer>
        <div v-if="!$vuetify.breakpoint.mobile">
          <div class="nav-menu">
            <v-col
              ><v-btn text v-scroll-to="'#home'" class="nav-items">
                Home
              </v-btn></v-col
            >
            <v-col
              ><v-btn text v-scroll-to="'#about'" class="nav-items">
                About
              </v-btn></v-col
            >
            <v-col
              ><v-btn text v-scroll-to="'#skill'" class="nav-items">
                Skills
              </v-btn></v-col
            >
            <v-col
              ><v-btn text v-scroll-to="'#work'" class="nav-items">
                Work
              </v-btn></v-col
            >
          </div>
        </div>
        <div v-else>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
      </v-app-bar>
      <v-navigation-drawer right floating temporary v-model="drawer" fixed>
        <v-list dense rounded>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            v-scroll-to="item.pos"
            @click="drawer = !drawer"
            link
          >
            <div class="drawer-item">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <ProfilePicture :avatarUrl="avatar_url" id="home" />
      <MyInfo
        id="about"
        data-aos="fade-right"
        data-aos-duration="1000"
        title="Info"
        :info="biography[0].info"
        :lifestyle="biography[0].lifestyle"
        :interesting="biography[0].interesting"
        :story="biography[0].story"
      />
      <SkillsChart
        id="skill"
        title="Skills"
        :skills="biography[0].skills"
        class="screen-expanded center"
      />

      <WorkExperience id="work" :workingExp="biography[0].working_exp" />
    </div>
    <div v-else>
      <Loading />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";

import MyInfo from "./components/MyInfo";
import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
import ProfilePicture from "./components/ProfilePicture";
import SkillsChart from "./components/SkillsChart";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
  name: "App",
  components: {
    MyInfo,

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
      drawer: false,
      group: null,
      items: [
        { title: "Home", icon: "mdi-home", pos: "#home" },
        { title: "About", icon: "mdi-information", pos: "#about" },
        { title: "Skills", icon: "mdi-hand", pos: "#skill" },
        { title: "Work", icon: "mdi-briefcase", pos: "#work" },
      ],
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
    },
  },
  mounted() {
    this.fetchMyData();
    this.fetchGithubData();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap");
#work {
  margin-bottom: 100px;
}
@media only screen and (max-width: 500px) {
  #about {
    padding-top: 56px;
  }
}
.app {
  font-family: "Kanit", sans-serif;
}
.nav-menu {
  display: flex;
  flex-direction: row;
}

.nav-items {
  width: 100px;
}

.center {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.drawer-item {
  display: flex;
  flex-direction: row;
}
</style>
