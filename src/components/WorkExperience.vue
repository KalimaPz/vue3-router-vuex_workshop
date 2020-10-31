<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ work_exp }}</div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
  props: {
    title: String,
    work_exp: Array
  }
};
</script>

<style>
</style>