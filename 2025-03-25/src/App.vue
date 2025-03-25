<script setup>
import axios from 'axios';
import { ref } from 'vue';
import Planet from './classes/planet.js';

const planets=ref([]);

const api="https://reeldev.hu/api/67b58345cab89993401111/swapi";  

const newPlanet=async()=>{
  await axios.get("https://swapi.py4e.com/api/planets/"+(planets.value.length+1)+"/")
  .then(response=>{
    var p=new Planet(planets.value.length+1, response.data.name, response.data.population, response.data.climate);
    planets.value.push(p);
    addCrud(p);
  })
  .catch(error=>{
    console.error("Error: "+error);
  })
};

async function addCrud(planet) {
  await axios.post(api,{
    sorszam: planet.getSorszam(),
    name: planet.getName(),
    population: planet.getPopulation(),
    climate: planet.getClimate()
  })
  .then(response=>{
    console.log("ok.")
  })
  .catch(error=>{
    console.error("Error: "+error)
  })
};

async function getDatas() {
  await axios.get(api)
  .then(response=>{
    planets.value=[]
    for (let i = 0; i < response.data.length; i++) {
      var p=new Planet(response.data[i].sorszam, response.data[i].name, response.data[i].population, response.data[i].climate);
      p.setId(response.data[i].id);
      planets.value.push(p);
    }
  })
  .catch(error=>{
    console.error("Error: "+error);
  })
};
getDatas();

const deletePlanets= async()=>{
  await getDatas();
  for (let i = 0; i < planets.value.length; i++) {
    await axios.delete(api+"/"+planets.value[i].getId())
      .then(response=>{
      })
      .catch(error=>{
        console.error("Error: "+error);
      })
  }
  getDatas();
  alert("Sikeres törlés!");
}
</script>

<template>
  <header>
    <p><img src="./assets/logo.png" alt="Star Wars logo" title="Star Wars logo"></p>
  </header>
  <main>
    <section>
      <h2>Planets</h2>
    </section>
    <section class="d-flex" >
      <div v-for="planet in planets">
        <div class="card" style="width: 10rem;">
          <div class="card-body">
            <p><img src="" alt="planet name"></p>
            <h5 class="card-title"><span class="fw-bold">{{planet.getName()}}</span></h5>
            <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">Population:</span> {{ planet.getPopulation() }}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary"><span class="fw-bold">Climate:</span> {{ planet.getClimate() }}</h6>
          </div>
        </div>
      </div>
    </section>
    <aside class="d-flex">
      <h3>Planet actions</h3>
      <button type="button" class="btn btn-success" @click="newPlanet()">Add new</button>
      <button type="button" class="btn btn-warning">Uppercase All</button>
      <button type="button" class="btn btn-danger" @click="deletePlanets">Delete All</button>
    </aside>
  </main>
  <footer>
    <p><span class="fw-bold">All rights reserved!</span></p>
  </footer>
</template>

<style scoped>
  h2{
   color: #fff000; 
  }
  header, footer{
    background-color: #fff000;
  }
  main{
    background-color: #000;
  }
  body{
    height: 100vh;
  }
</style>
