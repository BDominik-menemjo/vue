<script setup>
import {defineProps, defineEmits, watch} from "vue"
import Fruit from "../classes/Fruit";

var fruitInterval = null;

const emit = defineEmits(['updateScore']);

const props = defineProps({
    start: Boolean
});

watch(()=> props.start, (newValue, oldValue) =>{
    if(newValue && !fruitInterval){
        var gameArea = document.querySelector(".gameArea");
        fruitInterval = setInterval(() => {
            const x = Math.random()*(gameArea.offsetWidth - 30);
            const fruit = new Fruit(x, 0, 1+ Math.random()*2, '.gameArea', updateScore);
            fruit.fall();
        }, 800);
    }
    if(!newValue){
        stop();
    }
});

const stop = () =>{
    clearInterval(fruitInterval);
    fruitInterval = null;
    document.querySelectorAll(".apple").forEach(apple => apple.remove());
    document.querySelectorAll(".banana").forEach(banana => banana.remove());
}

const updateScore = (pont) =>{
    emit("updateScore", pont);
}

</script>
<template>
    <div class="gameArea"></div>
</template>

<style scoped>
.gameArea {
  border: 2px solid #D6322F;
  background-color: #add8e6;
  width: 400px;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 30px auto;
}
</style>