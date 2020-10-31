<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ skillsData }}</div>
  </div>
</template>

<script>
export default {
  name: "SkillsChart",
  props: {
    title: String,
    skillsData: Object
  }
};
</script>

<style>
</style>