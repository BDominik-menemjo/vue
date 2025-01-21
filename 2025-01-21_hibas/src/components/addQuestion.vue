<script setup>
    import Question from '../classes/Question';
    import { quizStore } from '../state/state.js';
    import { ref,defineEmits } from 'vue';

    const question=ref("");
    const answer=ref("");

    //State inicializaasa
    const qaState=quizStore();
    const emit = defineEmits(['startQuiz']);

    const addQuestion = () =>{
        var q=new Question(question.value, answer.value);
        qaState.addQuestion(q);
        alert("New question added!");
        question.value=answer.value="";
    }

    const startQuiz=()=>{
        emit("startQuiz");
    }
</script>
<template>
    <section>
      <h2>Add question</h2>
      <p>
        <label>Question:</label>
        <input type="text">
      </p>
      <p>
        <label>Answer:</label>
        <input type="text">
      </p>
      <p>
        <button @click="addQuestion">Add</button>
        <button @click="startQuiz" v-if="qaState.getQuestionsLength() > 0">Start quiz</button>
      </p>
    </section>
</template>
<style scoped>
    
</style>