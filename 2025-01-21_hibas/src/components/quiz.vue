<script setup>
    import Question from '../classes/Question';
    import { quizStore } from '../state/state.js';
    import { ref } from 'vue';

    const question=ref("");
    const answer=ref("");

    //State inicializaasa
    const qaState=quizStore();
    const questions=ref([]);
    const hasBeenShown=ref([]);
    const index = ref();
    const actualQuestion=ref();

    const generateQuestion = () =>{
      do{
        index.value=Math.floor(Math.random()*questions.value.length);
      }while(questions.value.length > hasBeenShown.value.length && !hasBeenShown.value.includes(index.value));
      hasBeenShown.value.push(index.value);
      actualQuestion.value=questions.value[index.value];
      
    }
generateQuestion();
</script>
<template>
    <section>
      <h2>Quiz</h2>
      <p>
        <label>Question:</label>
      </p>
      <p>
        <label>Answer:</label>
        <input type="text" v-model="answer">
      </p>
      <p>
        <button @click="">Next</button>
      </p>
    </section>
</template>
<style scoped>

</style>