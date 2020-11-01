<template>
  <div>
    <v-app-bar fixed dense dark>
      <div>Kalimapz Dev</div>
      <v-spacer></v-spacer>
      <div v-if="isMobile === true">
        <v-app-bar-nav-icon @click="print()"> </v-app-bar-nav-icon>
      </div>
      <div v-else class="nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">Info</div>
        <div class="nav-item">Skills</div>
        <div class="nav-item">Work</div>
        <div class="nav-item">Portfolio</div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, {
      passive: true
    });
  },

  data: () => ({
    isMobile: false,
    drawer: null
  }),
  mounted() {
    window.addEventListener("resize", this.onResize, {
      passive: true
    });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 700;
    },
    print() {
      console.log("pressed");
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
}

.nav-item {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
