<script setup>
import { ref, defineEmits } from 'vue';
import { questionState } from "../state/state.js";

const qaState = questionState();
const answer = ref('');
const hasBeenShown = ref([]);
const questions = ref(qaState.getQuestions());
const index = ref();
const emit = defineEmits(['summa']);

const generateQuestion = () => {
  if (hasBeenShown.value.length < qaState.getQuestionsLength()) {
    do {
      index.value = Math.floor(Math.random() * qaState.getQuestionsLength());
    } while (hasBeenShown.value.includes(index.value));
    hasBeenShown.value.push(index.value);
  } else {
    index.value = -1;
    qaState.setQuestionsIndexes(hasBeenShown.value);
    emit('summa');
  }
};
generateQuestion();

const next = () => {
  if (!answer.value) {
    alert('Please provide an answer.');
    return;
  }
  qaState.addUserAnswer(answer.value);
  answer.value = '';
  generateQuestion();
};
</script>

<template>
  <section>
    <h2>Quiz</h2>
    <div v-if="index >= 0">
      <p>
        <label>{{ questions[index].getQuestion() }}</label>
      </p>
      <p>
        <label>Answer:</label>
        <input type="text" v-model="answer" />
      </p>
      <p>
        <button @click="next">Next</button>
      </p>
    </div>
    <div v-else>
      <p>Quiz completed! Generating results...</p>
    </div>
  </section>
</template>

<style scoped></style>
