
import { defineStore } from "pinia";
import { ref } from "vue";

export const szerepjatekKarakterek = defineStore("karakterek", () => {
    const kedvencek=ref([]);
    function getKedvencek(){
        return kedvencek.value;
    }

    function addKedvencek(k){
        kedvencek.value.push(k);
    }
    
    return{getKedvencek, addKedvencek}
});

