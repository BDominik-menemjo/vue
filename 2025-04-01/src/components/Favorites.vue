<script setup>
import { ref } from 'vue';
import axios from 'axios';
import DogDetails from './DogDetails.vue';
import Dog from '../classes/Dog.js';

const api="https://reeldev.hu/api/67b58345cab89993401111/dogApi";

const kedvencek=ref([]);

const getFavorites = async ()=>{
    kedvencek.value=[];
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
};

const removeFavorite = async (kep) =>{
    console.log(kep.value);
    if(confirm("Biztosan törölni szeretné ezt a képet?")){
        await axios.delete(api+"/"+kep.getCrudId())
        .then(response=>{
            getFavorites();
            alert("Sikeres törlés!");
        })
        .catch(error=>{
            console.error("Error: "+error);
        })
    }
}

const setLikes=async (kep)=>{
    await axios.put(api+"/"+kep.getCrudId(),{
        url:kep.getUrl(),
        isFavorite: true,
        likes:kep.getLikes()+1
    }).then(response=>{
        console.log("Sikeres like");
        getFavorites();
    }).catch(error=>{
        console.error("Error: "+error);
    })
}

getFavorites();

</script>

<template>
    <section>
        <h2>Kedvencek</h2>
        <DogDetails :kepek="kedvencek" @removeFavorite="removeFavorite" @setLikes="setLikes"/>
    </section>
</template>

<style scoped>

</style>
