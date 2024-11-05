<script setup>
  import {ref} from "vue";
  import { quizData } from "../data/quizData";

  var quizzes = ref(quizData);
  var aktualiskerdes=1;
  var valaszindex=0;
  var helyes=0;
  var index=0;
</script>

<template>
  <div v-if="aktualiskerdes<=quizzes.length">
    <div>
      <h2>Kérdés {{ aktualiskerdes }}/{{quizData.length}}</h2>
      <p>{{ quizzes[index].question }}</p>
    </div>
    <div>
      <button>Föld</button>
      <button>Mars</button>
      <button>Jupiter</button>
      <button>Vénusz</button>
    </div>
    <div>
      <button class="tovabb">Tovább</button>
    </div>
    
  </div>
  <div v-else>
    <h2>Kviz vége!</h2>
    <p>Helyes válaszok: {{ helyes }}/{{ quizData.length }}</p>
  </div>
  
</template>

<style scoped>
  p, button{
    font-weight: 500;
  }
  button{
    width: 33%;
    padding: 10px 0px;
    display: inline-block;
    margin: 10px;
    border: none;
    border-radius: 7px;
    background-color: #f0ad4e;
  }
  h2{
    margin-top: 20px;
  }
  .tovabb{
    background-color: #34495F;
    color: white;
    margin-top: 20px;
    text-transform: uppercase;
  }
</style>
