<script setup>
import Question from '../classes/Question.js'
import { quizStore } from '../state/state.js'
import { ref } from 'vue'

const question = ref("");
const answer = ref("");
//state 
const qaState = quizStore();
const questions = ref([]);
const hasBeenShown = ref([]);
const index = ref();
const actualQuestion = ref();
const userAnswers=ref([])

questions.value = qaState.getQuestions();
const generateQuestion = () => {
  if (hasBeenShown.value.length == questions.value.length) {
    index.value = -1;
    userAnswers.value=qaState.getUserAnswers();
  } else {
    do {
      index.value = Math.floor(Math.random() * questions.value.length);
    } while (hasBeenShown.value.length < questions.value.length && hasBeenShown.value.includes(index.value));
    hasBeenShown.value.push(index.value);
    actualQuestion.value = questions.value[index.value].getQuestion();
  }
}

generateQuestion();

const next = () => {
  qaState.addUserAnswer(answer.value);
  generateQuestion();
  answer.value="";
}
</script>

<template>
  <section v-if="index!=-1">
    <h2>Quiz</h2>
    <p>
      <label>{{actualQuestion}}</label>
    </p>
    <p>
      <label>Answer:</label>
      <input type="text" v-model="answer">
    </p>
    <p>
      <button @click="next">Next</button>
    </p>
  </section>
  <section v-else>
    <h2>Summa</h2>
    <p v-for="i in hasBeenShown">
      <label>{{ questions[i].getQuestion() }}</label>
      <label class="goodAnswer">{{ questions[i].getAnswer() }}</label>
      <label class="userAnswer">{{ userAnswers[i] }}</label>
    </p>
  </section>
</template>
<style scoped>
.goodAnswer .userAnswer{
  text-transform: none;
}
.goodAnswer{
  color: green;
}
.userAnswer{
  color: aqua;
}
.summa p{
  border-bottom: 1px solid #ccc;
}
.summa p:last-of-type{
  text-align: left;
}
</style>
