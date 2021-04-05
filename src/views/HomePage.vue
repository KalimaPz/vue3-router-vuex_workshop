<template>
  <div>
    <Info />
    <!-- {{ this.$store.state.biograph.skill }} -->
    <SkillTree :skills="this.$store.state.biograph.skill" />
  </div>
</template>

<script>
import Info from "./sections/Info";
import SkillTree from "./sections/SkillTree";
export default {
  name: "HomePage",
  components: { Info, SkillTree },
};
</script>

<style>
</style>