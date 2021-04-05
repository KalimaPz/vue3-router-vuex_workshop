<template>
  <div>
    <div>
      {{ this.$store.state.biograph }}
      <div class="section-about-myself">
        <h1>Aboue Myself</h1>
        <v-card>
          <p>{{ bio_data.info.education.university.faculty }}</p>
          <p>{{ bio_data.info.education.university.main }}</p>
          <p>{{ bio_data.info.education.university.sub }}</p>
        </v-card>
        <v-timeline> </v-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",

  data() {
    return {
      bio_data: {},
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],
    };
  },
  methods: {
    set_data() {
      this.bio_data = this.$store.state.biograph;
    },
  },
  mounted() {
    this.set_data();
  },
};
</script>

<style></style>
