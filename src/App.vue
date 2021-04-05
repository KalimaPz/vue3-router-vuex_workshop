<template>
  <v-app>
    <div v-if="$store.state.loading == true">
      <Loading />
    </div>
    <div v-else>
      <HomePage />
    </div>
  </v-app>
</template>

<script>
import HomePage from "./views/HomePage.vue";
import Loading from "./views/Loading.vue";
export default {
  name: "App",
  components: { HomePage, Loading },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("FETCH");
  },

  methods: {
    getdata() {
      this.$store.dispatch("FETCH");
    },
  },
};
</script>

<style></style>
