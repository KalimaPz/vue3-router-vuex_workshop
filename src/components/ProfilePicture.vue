<template>
  <div class="landing">
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-container>
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-container class="container-image"> <v-img class="image" :src="avatarUrl" max-height="320" max-width="320"></v-img></v-container
            ></v-row>
          </v-col>

          <v-col align-self="center">
            <v-container class="container-info">
              <v-row justify="center"
                ><h1>{{ full_name }}</h1></v-row
              >
              <v-row justify="center"
                ><h2>{{ position }}</h2></v-row
              >
              <v-row justify="center"
                ><h3>at {{ work }}</h3></v-row
              >
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <div></div>
    </div>
    <div v-else>
      <v-col>
        <v-container class="container-image"> <v-img class="image" :src="avatarUrl" max-height="256" max-width="256"></v-img></v-container>
        <v-container class="container-info">
          <v-row justify="center"
            ><h1>{{ full_name }}</h1></v-row
          >
          <v-row justify="center"
            ><h2>{{ position }}</h2></v-row
          >
          <v-row justify="center"
            ><h3>at {{ work }}</h3></v-row
          >
        </v-container>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: ["avatarUrl"],
  data() {
    return {
      isMobile: false,
      full_name: "Donnukrit Satirakul",
      position: "Front End Developer",
      work: "Weserve Lifestyle Co.",
    };
  },
  methods: {
    setNew() {
      this.position = "Computer Engineering";
      this.work = "Prince of Songkhla University";
    },
    setDefault() {
      this.position = "Front End Developer";
      this.work = "Weserve Lifestyle Co.";
    },
    switchToMobile() {
      this.isMobile = true;
    },
    switchToDesktop() {
      this.isMobile = false;
    },
  },
};
</script>

<style scoped>
.landing {
  background-image: url("../assets/Black-Animation-Background.svg");
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.text-align {
  text-align: center;
}

.image {
  border-radius: 50%;
  margin: 50px;
}

.container-info {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  width: fit-content;
  padding: 50px;
  border-radius: 10px;
}

.container-image {
  width: fit-content;
}

.mark {
  background-color: red;
}

h1 {
  color: aliceblue;
}
h2 {
  color: aliceblue;
}
h3 {
  color: aliceblue;
}
</style>
