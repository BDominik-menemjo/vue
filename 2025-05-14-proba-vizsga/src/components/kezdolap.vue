<script setup>
import { ref } from 'vue';
import Karakter from '../classes/Karakter.js';
import axios from "axios";
import karakterLista from './karakterLista.vue';
import { szerepjatekKarakterek } from '../state/state.js';

const karakterekStore=szerepjatekKarakterek();
const api = "https://reeldev.hu/api/probavizsga/karakterek";

const karakterek = ref([]);

const karakterekLekerese = async () => {
    await axios.get(api)
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            var k = new Karakter(response.data[i].nev, response.data[i].faj, response.data[i].leiras, response.data[i].szint);
            var eltarolt=karakterekStore.getKedvencek();
            var volt=false;
            for (let i = 0; i < eltarolt.length; i++) {
                if(eltarolt[i].getNev() === k.getNev()){
                    volt=true;
                }                
            }
            if(!volt){
                karakterek.value.push(k); 
            }          
        }
    })
    .catch(error => {
        console.error("There was an error!", error);
    });
};
karakterekLekerese();

const addKarakter = (index)=>{
    karakterekStore.addKedvencek(karakterek.value[index]);
    karakterek.value.splice(index, 1);
}
</script>

<template>
    <section>
        <h2>Kezdőlap</h2>
        <karakterLista :karakterek="karakterek" :kedvencek="false" @add="addKarakter"/>
    </section>
</template>

<style scoped></style>
