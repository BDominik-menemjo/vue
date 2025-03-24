import { defineStore } from "pinia";
import { ref } from "vue";

export const kedvencPokemonok=defineStore("pokemon", ()=>{
    const kedvencek=ref([]);

    function addPokemon(p){
        kedvencek.value.push(p);
    }

    function removePokemon(index){
        kedvencek.value.splice(index,1);
    }

    function isKedvenc(p){
        for (let i = 0; i < kedvencek.value.length; i++) {
            if(kedvencek.value[i].name==p.name){
                return true;
            }            
        }
        return false;
    }

    function getPokemons(){
        return kedvencek.value;
    }

    return{addPokemon, getPokemons, removePokemon, isKedvenc}
});