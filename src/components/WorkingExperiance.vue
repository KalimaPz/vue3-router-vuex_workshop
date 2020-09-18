<template>
    <v-card>
        <div>
            <p class="current-status" v-if="current = true">
                Current
            </p>
            <p v-else>
                Not Current
            </p>
           <div class="details">
                <v-card-text><h1>{{ company }}</h1></v-card-text>
                <v-card-subtitle>{{ position }}</v-card-subtitle>
                <v-card-text>( {{ ability }} )</v-card-text>
           </div>
        </div>
        
    </v-card>
</template>

<script>
export default {
    name : 'WorkingExperiance',
    props :['current','company','position','ability']
}
</script>

<style scoped>
    .card {
        width: 30%;
        
        display: flex;
        flex-direction: column;
        justify-items: center;
        border-style: solid;
    }
    .current-status {
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;
        color: white;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 20px;
        background-color: #00AB66;
        text-align: center;
    }
    .details {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
</style>