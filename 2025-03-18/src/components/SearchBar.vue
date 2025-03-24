<script setup>
import { ref, defineEmits } from 'vue';

    const pokemonName=ref("");

    const emits=defineEmits(["search"]);

    const search=()=>{
        emits("search", pokemonName.value);
    }
</script>

<template>
    <section>
        <div class="container mt-4">
            <div class="mb-3 d-flex w-50 mx-auto">
                <input type="search" class="form-contorl" v-model="pokemonName" placeholder="Search">
                <button type="button" class="btn btn-warning" @click="search">Keresés</button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
