<script setup>
import { kedvencPokemonok } from '../state/state.js';
import { ref } from 'vue';

const pokemonState = kedvencPokemonok();

const pokemons=ref(pokemonState.getPokemons());
</script>

<template>
    <h1>Kedvencek</h1>
        <div class="d-flex flex-wrap text-center justify-content-start">
            <div class="card mb-3 mx-auto" style="width: 18rem;" v-for="pokemon in pokemons">
                <div class="card-body">
                    <p><img :src="pokemon.url" :alt="pokemon.name" class="w-100"></p>
                    <h5 class="card-title">{{ pokemon.name }}</h5>
                    <p><i class="bi bi-heart-fill" @click="add(pokemon)"></i></p>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>
