<script setup>
import { movieDatas } from "../data/movies.js"
import { screenings } from "../state/state.js";

const movieState=screenings();

function getImageUrl(name) {
    return new URL("../" + name, import.meta.url).href;
}

const setFilmId=(id)=>{
    movieState.setFilmId(id);
}
</script>

<template>
    <section>
        <h1>Films</h1>
        <div class="films df">
            <div class="film center" v-for="movie in movieDatas">
                <p><img :src="getImageUrl(movie.image)"></p>
                <h3>{{ movie.title }}</h3>
                <p><router-link class="link" to="/film">Tickets &raquo;</router-link></p>
            </div>
        </div>
        <p><router-link class="link" to="/film" @click="setFilmId(movie.id)">Kattints ide</router-link></p>
    </section>
</template>

<style scoped>
.film img{
    max-width: 100%;
}
.film{
    width: calc(48%-40px);
    padding: 20px;
    border: 1px solid #fff;
}
</style>
