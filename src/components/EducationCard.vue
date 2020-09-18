<template>
    <v-container>
        <v-card>
            <v-card-title>{{ place }}</v-card-title>
           <div>
                <v-card-subtitle class="year center">
                {{ startYear }} - {{ endYear }}
            </v-card-subtitle>
           </div>
            <v-card-text class="center">
                <div id="program">{{ program }}</div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name : 'EducationCard',
    props : ['place','startYear','endYear','program'],
}
</script>
<style scoped>
    #program {
        width: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        background-color: #0066b2;
        border-radius: 20px;
        color: white;
        font-weight: bold;
    }
    .year {
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .center{
        display: flex;
        justify-content: center;
    }
    .card {
        width: 100px;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-style: solid;
    }
</style>