<template>
  <div>
  <v-card elevation="2" min-width="200" max-width="600"  class="mx-auto" dark>
    <v-card-title>{{ companyName}}</v-card-title>
    <v-card-text>
    <v-row class="mx-0" align="center" justify="center" id="position"><strong>{{ position }}</strong></v-row>
    <v-row class="mx-0" align="center" justify="center" id="year">Year {{ year }}</v-row>
    
    </v-card-text>
    
  </v-card>
  </div>
</template>

<script>
export default {
    name : "WorkCard",
    props : {
        companyName : String,
        position : String,
        year : Number,
        current : Boolean,
        remark : String
    },
    methods : {
        func() { // void func() {} 

        }
    },
    computed : {
        foo() {
            return 0;
        }
    } ,
   
}
</script>

<style scoped>
    #position {
        font-size: clamp(1rem , 1.2rem , 2rem );
        padding: 10px;
    }
    #year{
        font-size: clamp(1rem , 1.2rem , 2rem );
        padding: 10px;
    }
    #remark{
        font-size: clamp(1rem , 1.2rem , 2rem );
        padding: 10px;
    }
</style>