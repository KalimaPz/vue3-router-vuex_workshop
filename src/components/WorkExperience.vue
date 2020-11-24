<template>
  <div class="work">
    <v-card flat>
      <v-col align-self="center">
        <v-card-title>
          <v-row justify="center header"><h2>Working Experience</h2></v-row>
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <div v-for="detail in workingExp" :key="detail">
              <WorkCard
                data-aos="fade-right"
                class="card-space"
                :companyName="detail.company"
                :position="detail.position"
                :year="detail.year"
                :current="detail.current"
                :remark="detail.remark"
              />
            </div>
          </v-row>
        </v-card-text>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import WorkCard from "./WorkCard";
export default {
  name: "WorkExperience",
  props: ["workingExp"],
  components: {
    WorkCard,
  },
};
</script>

<style scoped>
.card-area {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10;
}

.card-space {
  padding: 10px;
}
.work {
  height: 100vh;
}

.header {
  padding: 50px;
}

@media only screen and (max-width: 500px) {
  h2 {
    font-size: 1em;
  }
}
</style>