<script setup>
import { ref, computed, defineEmits } from 'vue';
import { questionState } from "../state/state.js";

const qaState = questionState();
const questions = ref(qaState.getQuestions());
const userAnswers = ref(qaState.getUserAnswers());
const indexes = ref(qaState.getQuestionsIndexes());

const emit = defineEmits(['reset']);

const correctAnswers = computed(() => {
  return indexes.value.reduce((count, index) => {
    return questions.value[index].getAnswer().toLowerCase().trim() === 
           userAnswers.value[index].toLowerCase().trim()
      ? count + 1
      : count;
  }, 0);
});

const newQuiz = () => {
  qaState.clearState();
  emit('reset');
};
</script>

<template>
  <section>
    <h2>Results</h2>
    <div v-for="index in indexes" :key="index" class="result-item">
      <p><strong>Question:</strong> {{ questions[index].getQuestion() }}</p>
      <p><strong>Correct Answer:</strong> {{ questions[index].getAnswer() }}</p>
      <p><strong>Your Answer:</strong> {{ userAnswers[index] }}</p>
    </div>
    <h3>Total Correct: {{ correctAnswers }} / {{ qaState.getQuestionsLength() }}</h3>
    <button @click="newQuiz">New Quiz</button>
  </section>
</template>

<style scoped>
.result-item {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
h3 {
  margin-top: 20px;
  color: #3AB982; 
}
button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #34495F; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #3AB982; 
}
</style>
