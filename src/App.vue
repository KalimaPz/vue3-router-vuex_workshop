<template>
  <div>
    <!-- {{ $store.state.biograph.info }} -->
    <div v-if="$store.state.loading == true">
      <h1> Loading </h1>
    </div>
    <div v-else>
 <h1> Finish </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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

<style>
</style>
