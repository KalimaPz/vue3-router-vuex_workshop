<template>
  <div class="landing-page">
    <div class="after">sss</div>
    <div class="backgroundImage"></div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(50px); /* apply the blur */
  backdrop-filter: blur(50px); /* apply the blur */
  pointer-events: none; /* make the pseudo class click-through */
}
.backgroundImage {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("../../assets/2061623.jpg");
  overflow-x: hidden;
}
</style>