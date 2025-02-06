<script setup>
import { screeningsData } from "../data/screenings.js"
import { movieDatas } from "../data/movies.js"
import { screenings } from "../state/state.js"
import { ref } from "vue";

const prefix="seat";
const movieState = screenings();
const movie = movieDatas.find(movie => movie.id === movieState.getFilmId());
const movieScreenings = screeningsData.filter(screenings => screenings.movieId === movieState.getFilmId());
const showSeats=ref(false);
const currentScreeningData=ref();

function getImageUrl(name) {
    return new URL("../" + name, import.meta.url).href;
}

const setSeats = (time) => {
    showSeats.value=true;
    currentScreeningData.value=movieState.getScreenings().find(ms => ms.getTime() === time && ms.getMovieId() === movieState.getFilmId());
}
const setColor = (i,j) =>{
    document.querySelector("#"+prefix+i+j).style.backgroundColor="red";
    reserveSeat(i,j);
}

const reserveSeat = (i,j) =>{
    if(!currentScreeningData.value.isFree(i,j)){
        currentScreeningData.value.setSeet(i,j);
    }
}

const reserve = () =>{
    const screens = movieState.getScreenings();
    var movie = screens.find(movie => movie.getMovieId() === movieState.getFilmId() && movie.getTime() === currentScreeningData.value.getTime());
    movie.setSeets(currentScreeningData.value.getSeets());

}
</script>

<template>
    <section>
        <h2>{{ movie.title}}</h2>
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
    <section v-if="showSeats">
        <h2>Seats - {{ currentScreeningData.getRoomId() }} - {{ currentScreeningData.getTime() }}</h2>
        <div class="df" v-for="(row, i) in currentScreeningData.getSeets()">
            <div class="seats" v-for="(column, j) in row.length">
                <span :id="prefix+i+j" @click="setColor(i,j)" :class="{'notfree':currentScreeningData.isFree(i,j)}"></span>
            </div>
        </div>
        <button @click="reserve">Reserve</button>
    </section>
    <section>
        <p><router-link class="link" to="/">&laquo; Back</router-link></p>
    </section>
</template>

<style scoped>
.df{
    justify-content: center;
}
.screenings{
    padding-bottom: 10px;
}
.time, .seats span{
    background-color: #FDCD00;
    padding: 10px 20px;
    margin: 10px;
    color: #000;
    font-weight: 700;
    border-radius: 10px;
}
button,.seats span{
    display: block;
}
button{
    margin: 10px auto;
}
.seats span{
    padding: 20px;
    margin-bottom: 20px;
    background-color: green;
}
.time:hover, button:hover{
    background-color: aqua;
    cursor: pointer;
}
.seats span.notfree{
    background-color: red;
}
</style>
