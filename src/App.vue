<template>

  <v-app>
  
<div>
  <div v-for="elem in my_info" :key="elem.info">
{{ elem.info}}
  </div>
</div>
  </v-app>
</template>

<script>
import { db } from './config/config'

export default {
  name: "App",

 data : () => {
   return {
     my_info : []
   }
 },
 firestore(){
   db.collection('information')
   return {
     my_info : db.collection('information').doc('8NB5BqxpGYzk5lA1QSml')
   }
 },
  methods : {

  }
};
</script>

<style>

</style>
