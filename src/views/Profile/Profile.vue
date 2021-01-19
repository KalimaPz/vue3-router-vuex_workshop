<template>
  <div class="container">
    <v-row class="mx-auto" justify="center">
      <v-col lg="12" class="header">
        <h1>PROFILE</h1>
        <div class="line" id="header"></div>
      </v-col>
      <v-col lg="5">
        <p class="content">
          Lorem pai dolor sit amet, consectetur adipisicing elit. Quaerat ea
          nobis in eos quas provident harum expedita sunt earum pai.
        </p>
      </v-col>
      <v-col lg="2">
        <div class="line" id="content"></div>
      </v-col>
      <v-col lg="5">
        <p class="content">
          Lorem pai dolor sit amet consectetur adipisicing elit. Expedita a
          omnis corporis harum debitis nostrum aspernatur ad minus velit ea
          itaque illo soluta temporibus, pariatur rerum similique impedit
          mollitia pai!.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12" class="header">
        <h1>HOBBY</h1>
        <div class="line" id="header"></div>
      </v-col>
      <v-col lg="4">
        <h2>Coding</h2>
      </v-col>
      <v-col lg="4">
        <h2>Gaming</h2>
      </v-col>
      <v-col lg="4">
        <h2>Photography</h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>

<style>
.container {
  text-align: center;
  margin: 0;
}
.line {
  background-color: black;
}
.line#header {
  margin: 20px auto;
  max-width: 125px;
  height: 4px;
}
.line#content {
  margin: 0 auto;
  width: 4px;
  height: 300px;
}
.content {
  font-size: 24px;
}
.header {
  margin-top: 20px;
}
</style>