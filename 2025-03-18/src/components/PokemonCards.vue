<script setup>
import { defineProps } from 'vue';

const props=defineProps({
    pokemonList: Array,
    isFavorite: Boolean
});

const emit=defineEmits(["add", "delete"]);

const add=(p)=>{
    emit("add",p);
}

const deletePokemon=(i)=>{
    emit("delete",i);
}
</script>

<template>
    <section>
        <div class="d-flex flex-wrap text-center justify-content-start">
            <div class="card mb-3 mx-auto" style="width: 10rem;" v-for="(pokemon, index) in pokemonList">
                <div class="card-body">
                    <p><img :src="pokemon.url" :alt="pokemon.name" class="w-100"></p>
                    <h5 class="card-title">{{ pokemon.name }}</h5>
                    <p v-if="isFavorite"><i class="bi bi-trash-fill" @click="deletePokemon(index)"></i></p>
                    <p v-else><i class="bi bi-heart-fill" @click="add(pokemon)"></i></p>
                </div>
            </div>
        </div>
    </section>
    
</template>

<style scoped>

</style>
