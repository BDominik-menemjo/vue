<script setup>
import { kedvencPokemonok } from '../state/state.js';
import { ref } from 'vue';
import PokemonCards from './PokemonCards.vue';

const pokemonState = kedvencPokemonok();

const pokemons=ref(pokemonState.getPokemons());

const deletePokemon=(i)=>{
    if(confirm("Biztosan törölni szeretné: "+pokemons.value[i].name+" ?")){
        pokemonState.removePokemon(i);
    }
    
}
</script>

<template>
    <PokemonCards :pokemonList="pokemons" :isFavorite="true" @delete="deletePokemon"/>
</template>

<style scoped>

</style>
