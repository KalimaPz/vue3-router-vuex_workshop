<template>
<div>
  <h1>HelloWorld</h1>
</div>
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
