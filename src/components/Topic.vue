<template>
  <div class="container">{{ name }}</div>
</template>

<script>
export default {
    name : "Topic",
    props : ['name'],
}
</script>

<style scoped>
    .container {
        padding-left: 50px;
        padding-right: 50px;
        font-size: 18px;
        color: white;
        font-weight: bold;
        text-align: center;
        max-width: fit-content;
        border-radius: 5px;
        background-color: rgb(27, 149, 102);
    }
</style>