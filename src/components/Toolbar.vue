<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon
        click.stop="drawer = !drawer"
      >

      </v-app-bar-nav-icon>
 
      <v-toolbar-title>DNK Resume</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn> -->
    </v-toolbar>
  </div>
</template>

<script>
export default {
    name : "Toolbar",
      data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  
}
</script>

<style>

</style>