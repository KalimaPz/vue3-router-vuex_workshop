<template>
<v-app>
    <div class="loading-indicator">
        <v-progress-circular indeterminate size="100">
        </v-progress-circular>
    </div>
</v-app>
</template>

<script>
export default {
    name: "Loading",
    mounted() {

    }
}
</script>

<style scoped>
.loading-indicator {
    height: 100%;
    display: flex;
    /* background-color: aquamarine; */
    justify-content: center;
    align-items: center;

}
</style>
