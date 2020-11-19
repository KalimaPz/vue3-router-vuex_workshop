
<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="cornflower lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="item in icons" :key="item" class="mx-4 white--text" icon>
          <v-icon size="24px" @click="goTo(item.link)">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong
          >KalimaPz Dev | Tel.091-053-3948 | E-mail : donnukrit.s@gmail.com
          |</strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      { icon: "mdi-facebook", link: "https://www.facebook.com/phone.dnk/" },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/iphone.coepk/",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/donnukrit-satirakul-0a5924176/",
      },
      { icon: "mdi-github", link: "https://github.com/KalimaPz" },
      { icon: "mdi-gitlab", link: "https://gitlab.com/kalima007c" },
    ],
  }),
  methods: {
    goTo(link) {
      window.location.href = link;
    },
  },
};
</script>

<style scoped>
.cornflower {
  background-color: cornflowerblue;
}
</style>