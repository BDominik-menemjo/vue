<script setup>
import Screening from "./classes/Screening.js"
import { roomsData } from "./data/rooms.js"
import { movieDatas } from "./data/movies.js"
import { screeningsData } from "./data/screenings.js"
import { screenings } from "./state/state.js"

const movieState = screenings();
// State feltöltése
if(movieState.getScreeningsLength() == 0){
  for (let i = 0; i < screeningsData.length; i++) {
    const seats = roomsData.find(room => room.id === screeningsData[i].roomId);
    const seatsCopy = seats.seats.map(row => [...row]);
    var s = new Screening(screeningsData[i].movieId, screeningsData[i].roomId, screeningsData[i].time, seatsCopy);
    movieState.addMovie(s);
  }
}

</script>

<template>
  <header class="center">
    <router-link to="/"><img src="./assets/logo.jpg" alt="Cinema"></router-link>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="center">
    <p>Copyright - All rights reserved!</p>
  </footer>
</template>

<style scoped></style>
