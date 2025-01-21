<script setup>
import addQuestion from "./components/addQuestion.vue";
import quiz from "./components/quiz.vue";
import {ref} from 'vue'

const isStartQuiz = ref(false);
const startQuiz = () => {
  isStartQuiz.value = !isStartQuiz.value;
}
</script>


<template>
  <header>
    <h1>Q&A app</h1>
  </header>
  <main>
    <addQuestion @startQuiz="startQuiz" v-if="!isStartQuiz"/>
    <quiz v-else/>
  </main>
  <footer>
    <p>Copyright - All rights reserved</p>
  </footer>
  
</template>


<style scoped>

</style>
