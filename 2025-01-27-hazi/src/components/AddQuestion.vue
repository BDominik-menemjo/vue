<script setup>
import { ref, defineEmits } from 'vue';
import Question from '../classes/Question.js';
import { questionState } from "../state/state.js";

const qaState = questionState();
const question = ref('');
const answer = ref('');
const emit = defineEmits(['startQuiz']);

const addQuestion = () => {
  if (!question.value || !answer.value) {
    alert('Please provide both a question and an answer.');
    return;
  }
  qaState.addQuestion(new Question(question.value, answer.value));
  question.value = answer.value = '';
  alert('The question has been saved.');
};

const startQuiz = () => {
  emit('startQuiz');
};
</script>

<template>
  <section>
    <h2>Add Questions</h2>
    <p>
      <label>Question:</label>
      <input type="text" v-model="question" />
    </p>
    <p>
      <label>Answer:</label>
      <input type="text" v-model="answer" />
    </p>
    <p>
      <button @click="addQuestion">Add</button>
      <button v-if="qaState.getQuestionsLength() > 0" @click="startQuiz">Start Quiz</button>
    </p>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
