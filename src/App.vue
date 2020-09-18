<template>
  <v-app class="app-font">
    <EducationCard 
      place='Pakphanang'
      startYear = '2010'
      endYear = '2016'
      program = 'Sci-Math' 
    />
    <WorkingExperiance
      current = true
      company = "Weserve Lifestyle Co."
      position = "Front End Developer"
      ability = "Flutter , Dart"
    />
  </v-app>
</template>

<script>
import EducationCard from './components/EducationCard'
import WorkingExperiance from './components/WorkingExperiance'
export default {
  name: "App",

  components: {
    EducationCard,
    WorkingExperiance
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&family=Mitr:wght@200;400;600&display=swap');
  .app-font {
    /* font-family: 'Mitr', sans-serif; */
    font-family: 'Kanit', sans-serif;
  }
</style>