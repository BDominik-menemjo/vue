<script setup>
    import { ref } from 'vue';
    import PokemonDetails from './PokemonDetails.vue';
    import SearchBar from './SearchBar.vue';

    const pokemonName=ref("");
    const search=(name)=>{
        pokemonName.value=name;
    }
</script>

<template>
    <main>
        <SearchBar @search="search"/>
        <PokemonDetails :pokemonName="pokemonName"/>
    </main>
</template>

<style scoped>

</style>
