import { defineStore } from "pinia";
import { ref } from "vue";

export const kedvencKutyak=defineStore("kutya", ()=>{
    const kedvencek=ref([]);

    function addToFavorites(k){
        kedvencek.value.push(k);
    }

    function removeFromFavorites(index){
        kedvencek.value.splice(index,1);
    }

    function isFavorite(k){
        for (let i = 0; i < kedvencek.value.length; i++) {
            if(kedvencek.value[i].message == k.message){
                return true;
            }
        }
        return false;
    }

    return(addToFavorites, removeFromFavorites, isFavorite);
});