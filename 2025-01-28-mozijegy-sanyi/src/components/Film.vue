<script setup>
import { screenings } from '../state/state.js';
import { movieDatas } from '../data/movies.js';
import { screeningsData } from '../data/screenings.js';

function getImageUrl(name) {
    return new URL("../" + name, import.meta.url).href
}

const movieState = screenings();
const movie = movieDatas.find((movie) => movie.id === movieState.getFilmId())

const movieScreenings = screeningsData.filter(screenings => screenings.movieId === movieState.getFilmId());

</script>

<template>
    <section>
        <h2 class="center"> {{ movie.title }} </h2>
        <p class="center"><img :src="getImageUrl(movie.image)" :alt="movie.title"></p>
        <p>{{ movie.description }}</p>
        <hr>
    </section>
    <section class="screenings">
        <h2 class="center">Screenings</h2>
        <div class="df">
           <p class="time" v-for="ms in movieScreenings" @click="setSeats(ms.time)">{{ ms.time }}</p> 
        </div>
        <p><router-link class="link" to="/">&laquo Back</router-link></p>
    </section>
</template>

<style scoped>
.df{
    justify-content: center;
}
.screenings{
    padding-bottom: 10px;
}
.time{
    background-color: #FBCD00;
    padding: 10px 20px;
    margin: 10px;
    color: #fff;
    font-weight: 700;
    border-radius: 10px;
}
.time:hover{
    background-color: aqua;
    cursor: pointer;
}
</style>
