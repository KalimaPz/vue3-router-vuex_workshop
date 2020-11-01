<template>
  <div>
    <v-container fluid class="lined mx-auto">
      <v-row>
        <v-col align-self="center" sm="4" cols="12">
          <v-row justify="center">
            <div class="rounded-box">My Info</div>
          </v-row>
        </v-col>
        <v-col>
          <div class="flex-col lined">
            <div class="padding-topic">
              <v-container>
                <div><strong>About Me</strong></div>
                <p>{{ story }}</p>
              </v-container>
              <div>
                <strong>Main Branch</strong> :
                {{ info.education.university.main }}
              </div>
              <div>
                <strong>Main Branch</strong> :
                {{ info.education.university.main }}
              </div>
              <div>
                <strong>Sub Branch</strong> :
                {{ info.education.university.sub }}
              </div>
              <div><strong>Live in</strong> : {{ live }}</div>
              <div><strong>Hometown</strong> : {{ home }}</div>
            </div>
            <div class="flex-col padding-topic">
              <div><strong>Interesting</strong></div>
              <div v-for="item in interesting" :key="item">
                <ol>
                  -
                  {{
                    item
                  }}
                </ol>
              </div>
            </div>

            <div class="flex-col padding-topic">
              <div><strong>Lifestyle</strong></div>
              <div v-for="item in lifestyle" :key="item">
                <ol>
                  -
                  {{
                    item
                  }}
                </ol>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="lined">
      <v-row>
        <v-col align-self="center" sm="4" cols="12">
          <v-row justify="center">
            <div class="rounded-box">Education</div>
          </v-row>
        </v-col>
        <v-col>
          <v-card class="mx-auto timeline-font">
            <v-card-title>Timeline</v-card-title>
            <v-timeline dense>
              <v-timeline-item small>
                <v-row justify="center"
                  ><strong>Prince of Songkhla University</strong></v-row
                >
                <v-row justify="center">Faculty of Engineering</v-row>
              </v-timeline-item>
              <v-timeline-item small>
                <v-row justify="center"
                  ><strong>Prince of Songkhla University</strong></v-row
                >
                <v-row justify="center">Faculty of Engineering</v-row>
              </v-timeline-item>
              <v-timeline-item small>
                <v-row justify="center"
                  ><strong>Prince of Songkhla University</strong></v-row
                >
                <v-row justify="center">Faculty of Engineering</v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  props: ["title", "info", "lifestyle", "interesting", "story"],
  data() {
    return {
      live: "Phuket",
      home: "Nakorn Si Thammarat"
    };
  }
};
</script>

<style>
.lined {
  border-style: solid;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.center {
  justify-content: center;
}

.timeline-font {
  font-size: clamp(1rem, 1vw, 2rem);
}

.rounded-box {
  width: fit-content;
  padding: 20px;
  background-color: aquamarine;
  border-radius: 10px;
}

.padding-topic {
  padding: 20px;
}
</style>
