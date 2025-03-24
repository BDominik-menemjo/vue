import { defineStore } from "pinia";
import { ref } from "vue";

export const kedvencPokemonok=defineStore("pokemon", ()=>{
    const kedvencek=ref([]);

    function addPokemon(p){
        kedvencek.value.push(p);
    }

    function getPokemons(){
        return kedvencek.value;
    }

    return{addPokemon, getPokemons}
});