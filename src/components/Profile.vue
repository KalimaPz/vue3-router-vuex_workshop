<template>
  <div class="main-container">
    <div class="pic">
      <v-img
        class="rounded-circle"
        aspect-ratio="1"
        max-height="256"
        max-width="256"
        src="https://avatars3.githubusercontent.com/u/23716821?v=4"
      />
    </div>
    <div class="info-container">
      <p id="name">Donnukrit Satirakul</p>
      <p id="position">Front-End Dev</p>
      <p id="skills">(Flutter , React)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style>
.main-container {
  margin: 5%;
  /* background-color: #d9afd9; */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  backdrop-filter: blue(10px);
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: space-evenly;
  align-items: center;
}
.pic {
  display: flex;
  height: 100%;
  flex: 2;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
  /* border-radius: 50%; */
}
.info-container {
  height: 100%;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
}
#name{
    font-size: 3vw;
    color: white;
    
    font-weight: bold;
}

#position{
    font-size: 1.5vw;
    color : white;
    font-weight: bold;
}

#skills {
    font-size: 1.5vw;
    color : white;
    font-weight: bold;
}
</style>