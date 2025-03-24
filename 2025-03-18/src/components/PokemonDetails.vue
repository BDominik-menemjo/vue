<script setup>
    import axios from 'axios';
    import { defineProps, ref, watch } from 'vue';
    import { kedvencPokemonok } from '../state/state.js';

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
        pokemonState.addPokemon(p);
        alert("A(z) "+p.name+" pokémont sikeresen hozááadtuk a kedvencekhez!");
    };
</script>

<template>
    <section>
        <p v-if="pokemonName.length>0" class="text-center">Találatok a <strong>{{pokemonName}}</strong> kulcsszóra: </p>
        <div class="d-flex flex-wrap text-center justify-content-start">
            <div class="card mb-3 mx-auto" style="width: 18rem;" v-for="pokemon in pokemons">
                <div class="card-body">
                    <p><img :src="pokemon.url" :alt="pokemon.name" class="w-100"></p>
                    <h5 class="card-title">{{ pokemon.name }}</h5>
                    <p><i class="bi bi-heart-fill" @click="add(pokemon)"></i></p>
                </div>
            </div>
        </div>
    </section>
    
</template>

<style scoped>

</style>
