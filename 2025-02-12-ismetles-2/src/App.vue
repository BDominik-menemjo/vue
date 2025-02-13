<script setup>
import { ref } from 'vue';
import Show from './components/Show.vue';
import { numbersState } from './state/state.js';

//State initialise
const state=numbersState();

const numberInput=ref();

const add = () => {
  state.addNumber(numberInput.value);
  numberInput.value = '';
}


</script>

<template>
  <header>
    <h1>Szülő</h1>
  </header>
  <main>
    <section>
      <input type="number" v-model="numberInput">
      <button @click="add">Felvesz!</button>
      <Show />
    </section>
  </main>
  <footer>

  </footer>
</template>

<style scoped>

</style>