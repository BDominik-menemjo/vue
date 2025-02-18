<script setup>
import axios from 'axios';
import Diak from './classes/Diak.js';
import { ref } from 'vue';

const SOR = 6;
const OSZLOP = 5;

const ulesrend = ref(new Array(SOR).fill(null).map(() => Array(OSZLOP).fill(null)));

const setUlesrend = async () => {
  for (let i = 0; i < ulesrend.value.length; i++) {
    for (let j = 0; j < ulesrend.value[i].length; j++) {
      await axios.get("https://banki13.komarom.net/2024/bordacsk/controllers/api.php?row=" + i + "&column=" + j)
        .then(response => {
          if(response.data.id != undefined){
            ulesrend.value[i][j] = new Diak(response.data.id, response.data.nev, i, j);
          }else{
            ulesrend.value[i][j] = new Diak(-1, "", i, j);
          }
        })
        .catch(error => {
          console.error("Error: " + error)
        })
    }
  }
}
setUlesrend();

const del = async (did) => {
  await axios.delete("https://banki13.komarom.net/2024/bordacsk/controllers/api.php", {
    params: {
      id: parseFloat(did)
    }
  })
    .then(response => {
      setUlesrend();
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}

const set = async (did,i,j) =>{
  var ujnev = prompt("Diák neve: ");
  if(ujnev.length!=0){
    await axios.put("https://banki13.komarom.net/2024/bordacsk/controllers/api.php",{
      nev: ujnev,
      sor: i,
      oszlop: j,
      id: did
    })
    .then(response => {
      setUlesrend();
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  }
}

const add = async (i,j) =>{
  var ujnev = prompt("Diák neve: ");
  if(ujnev.length!=0){
    await axios.post("https://banki13.komarom.net/2024/bordacsk/controllers/api.php",{
      nev: ujnev,
      sor: i,
      oszlop: j
    })
    .then(response => {
      setUlesrend();
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  }
}
</script>

<template>
  <main>
    <section>
      <h1>Ülésrend</h1>
      <div class="rows df" v-for="(sor, i) in ulesrend">
        <div class="cols" v-for="(oszlop, j) in sor">
          <div>
            <p v-if="oszlop.getId()!=-1">{{ oszlop.getNev() }}</p>
            <p v-if="oszlop.getNev()==''" @click="add(i,j)"><i class="bi bi-plus-circle-fill"></i></p>
            <p v-if="oszlop.getNev().trim() == '-'" @click="set(oszlop.getId(),i,j)"><i class="bi bi-plus-circle-fill"></i></p>
            <p v-else><i @click="del(oszlop.getId())" class="bi bi-trash-fill"></i></p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
h1,
.df div {
  text-align: center;
}

.df {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.df div {
  width: 200px;
  padding-top: 20px;
  background-color: aqua;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}

.df div:hover {
  background-color: antiquewhite;
}

.cols {
  margin: 20px;
}
</style>