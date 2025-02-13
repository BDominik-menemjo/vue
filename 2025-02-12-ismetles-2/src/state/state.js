import { defineStore } from "pinia";
import { ref } from "vue";

export const numbersState = defineStore("numbersState",()=>{
    const numbers = ref([]);

    function addNumber(number){
        numbers.value.push(number);
    }

    function removeNumber(index){
        numbers.value.splice(index,1);
    }

    function getNumbers(){
        return numbers.value;
    }

    return{addNumber, removeNumber, getNumbers};
});