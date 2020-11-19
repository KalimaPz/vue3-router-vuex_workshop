<template>
  <v-app-bar fixed dense dark flat>
    <v-col>
      <v-img max-height="32" max-width="32" src="../assets/icon.png"></v-img>
    </v-col>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <div class="nav-menu">
        <v-col>Home</v-col>
        <v-col>About</v-col>
        <v-col>Skills</v-col>
        <v-col>Work</v-col>
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
.nav-menu {
  display: flex;
  flex-direction: row;
}
</style>
