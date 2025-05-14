<script setup>
import karakterLista from './karakterLista.vue';
import { szerepjatekKarakterek } from '../state/state.js';
import { ref } from 'vue';
const karakterekStore=szerepjatekKarakterek();
const karakterek = ref(karakterekStore.getKedvencek());
</script>

<template>
    <section>
        <h2>Saját karakterek</h2>
        <karakterLista :karakterek="karakterek" :kedvencek="true" @add="addKarakter"/>
    </section>
</template>

<style scoped></style>
