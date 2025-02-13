<script setup>
  import { ref } from 'vue';
  import Child from './components/Child.vue';
  
  const message = "Én vagyok az Apád!";
  const answer =ref("");

  const happy=()=>{
    answer.value="Menjünk el fagyizni!";
  }
  
  const sad=()=>{
    answer.value="Hát ez van!";
  }
</script>

<template>
  <header>
    <h1>Szülő</h1>
    <p>{{ answer }}</p>
  </header>
  <main>
    <Child :id="1" @happy="happy" @sad="sad"/>
    <Child :dad="message" :id="2" @happy="happy" @sad="sad"/>
  </main>
  <footer>

  </footer>
</template>

<style scoped>

</style>