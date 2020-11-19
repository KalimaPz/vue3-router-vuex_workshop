<template>
  <v-app-bar fixed dense dark flat>
    <v-col>
      <v-img max-height="32" max-width="32" src="../assets/icon.png"></v-img>
    </v-col>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <div class="nav-menu">
        <v-col><a v-scroll-to="'#element'">Home</a></v-col>
        <v-col><a>About</a></v-col>
        <v-col><a>Skills</a></v-col>
        <v-col><a>Work</a></v-col>
      </div>
    </div>
    <div v-else>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
</style>
