<template>
  <div>
    <div>
      <div class="section-about-myself">
        <h1>Aboue Myself</h1>
        {{ this.$store.state.biograph }}
        <v-card>
          <p>{{ bio_data.info.education.university.faculty }}</p>
          <p><b>Major : </b> {{ bio_data.info.education.university.main }}</p>
          <p><b>Minor : </b> {{ bio_data.info.education.university.sub }}</p>
          <!-- <li v-for="interest in bio_data.info"></li> -->
          <div>
            <div>Interesting in</div>
            <li>Database</li>
            <li>Web Development</li>
            <li>Object Oriented Programing</li>
            <li>Cryptocurrency</li>
          </div>
        </v-card>
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
