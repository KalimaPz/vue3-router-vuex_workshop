<template>
  <div>
    <v-container fluid>
      <v-row class="header" justify="center">
        <v-col align-self="center">
          <div class="center">
            <v-img :src="avatar_url" max-width="256" id="image"></v-img>
          </div>
        </v-col>
        <v-col align-self="center" class="details">
          <v-row justify="center">
            <h1>{{ full_name }}</h1>
          </v-row>
          <v-row justify="center">
            <h2>{{ position }}</h2>
          </v-row>
          <v-row justify="center">
            <h3>at {{ work }}</h3>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: ["avatar_url"],
  data() {
    return {
      isMobile: false,
      full_name: "Donnukrit Satirakul",
      position: "Front End Developer",
      work: "Weserve Lifestyle Co."
    };
  },
  methods: {
    switchToMobile() {
      this.isMobile = true;
    },
    switchToDesktop() {
      this.isMobile = false;
    }
  }
};
</script>

<style scoped>
.header {
  padding: 30px;
}

.top-padd {
  padding: 20%;
}

.profile-image {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}

#inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#name {
  text-align: center;
  padding-top: 5%;
}

#image {
  border-radius: 50%;
}

#zone {
  padding: 10%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.details {
  text-align: center;
  width: fit-content;
}

.lined {
  /* border-style: solid; */
}

.center {
  display: flex;
  justify-content: center;
}
</style>
