<script setup>
    import axios from 'axios';
    import { defineProps, ref, watch } from 'vue';
    import { kedvencPokemonok } from '../state/state.js';
    import PokemonCards from './PokemonCards.vue';

    const pokemonState = kedvencPokemonok();

    const pokemons=ref([]);

    const props=defineProps({
        pokemonName: String
    });

    const getDatas=async(datas)=>{
        pokemons.value=[];
        for(let i=0; i<datas.length;i++){
            await axios.get(datas[i].url)
            .then(response=>{
                var pokemon={
                    name: response.data.name,
                    url: response.data.sprites.front_default
                }
                pokemons.value.push(pokemon);
            })
            .catch(error=>{
                console.error("Error: "+error);
            })
        }
    };

    const getPokemons = async ()=>{
        await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0")
        .then(response=>{
            var temp =response.data.results.filter((element)=>element.name.indexOf(props.pokemonName)>-1);
            getDatas(temp);
        })
        .catch(error=>{
            console.error("Error: "+error);
        });
    };

    watch(()=> props.pokemonName, (newValue)=>{
        if(newValue!=""){
            getPokemons();
        };
    });

    const add=(p)=>{
        if(!pokemonState.isKedvenc(p)){
            pokemonState.addPokemon(p);
            alert("A(z) "+p.name+" pokémont sikeresen hozááadtuk a kedvencekhez!");
        }else{
            alert("A(z) "+p.name+" pokémon már a kedvencekhez van adva!");
        }  
    };
</script>

<template>
    <section>
        <p v-if="pokemonName.length>0" class="text-center">Találatok a <strong>{{pokemonName}}</strong> kulcsszóra: </p>
        <PokemonCards :pokemonList="pokemons" @add="add" :isFavorite="false"/>
    </section>
</template>

<style scoped>

</style>
