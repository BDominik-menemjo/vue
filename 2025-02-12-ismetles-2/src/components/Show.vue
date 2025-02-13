<script setup>
import { numbersState } from '../state/state.js';

const state=numbersState();
const numbers=state.getNumbers();
</script>

<template>
    <section>
        <h2>Gyerek</h2>
        <p v-for="number in numbers">{{ number }}</p>
    </section>
</template>

<style scoped>

</style>