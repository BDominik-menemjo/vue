<script setup>
import axios from 'axios';
import { ref } from 'vue';
import DogDetails from './DogDetails.vue';
import Dog from '../classes/Dog.js';

const kepek=ref([]);
const kedvencek=ref([]);
const api="https://reeldev.hu/api/67b58345cab89993401111/dogApi";

const getDatas = async (datas) => {
    kepek.value=[];
    for (let i = 0; i < 10; i++) {
        await axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response=>{
            var d=new Dog(response.data.message, false,0);
            kepek.value.push(d);
        })
        .catch(error=>{
            console.error("Error: "+error);
        })
    }
}

const getFavorites = async ()=>{
    await axios.get(api)
        .then(response=>{
            for (let i = 0; i < response.data.length; i++) {
                var d=new Dog(response.data[i].url, response.data[i].isFavorite, response.data[i].likes);
                d.setCrudId(response.data[i].id);
                kedvencek.value.push(d);
            }
        })
        .catch(error=>{
            console.error("Error: "+error);
        })
}

const addFavorite = async (kep)=>{
    var volt=false;
    for (let i = 0; i < kedvencek.value.length; i++) {
        if(kedvencek.value[i].getUrl()==kep.getUrl()){
            volt=true;
        }
    }

    if(volt){
        alert("Ezt már hozáadta a kedvencekhez!");
    }else{
        await axios.post(api, {
            url: kep.getUrl(),
            isFavorite: true,
            likes: kep.getLikes()
        })
        .then(response=>{
            getFavorites();
            alert("Sikeres hozáadás!");
        })
        .catch(error=>{
            console.error("Error: "+error);
        })
    }
}

getDatas();
getFavorites();
</script>

<template>
    <h2>Kezdőlap</h2>
    <DogDetails :kepek="kepek" @addFavorite="addFavorite"/>
</template>

<style scoped>

</style>
