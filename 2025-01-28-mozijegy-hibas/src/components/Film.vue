<script setup>
import { movieDatas } from '../data/movies';
import { screeningsData} from "../data/screenings.js";
import { screenings } from '../state/state';

const movieState=screenings();
const movie=movieDatas.find(movie=>movie.id===movieState.getFilmId());
const movieScreenings = screeningsData.filter(screenings=>screenings.movieId===movieState.getFilmId());
function getImageUrl(name) {
    return new URL("../" + name, import.meta.url).href;
}


</script>

<template>
    <section>
        <h2>{{movie.title}}</h2>
        <p class="center"><img :src="getImageUrl(movie.image)" :alt="movie.title"></p>
        <p>{{ movie.description }}</p>
        <hr>
    </section>
    <section class="screenings">
        <h2>Screenings</h2>
        <div class="df">
            <p class="time" v-for="ms in movieScreenings" @click="setSeats(ms.time)">{{ ms.time }}</p>
        </div>
    </section>
    <section>
        <p><router-link class="link" to="/">&laquo; Back</router-link></p>
    </section>
</template>

<style scoped>
.df{
    justify-content: center;
}
.sreenings{
    padding-bottom: 10px;
}
.time{
    background-color: #FDCD00;
    padding: 10px 20px;
    margin: 10px;
    color: #000;
    font-weight: 700;
    border-radius: 10px;
    width: 100px;
}
.time:hover{
    background-color: aqua;
    cursor: pointer;
}
</style>
