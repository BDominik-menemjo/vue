import { defineStore } from "pinia";
import { ref } from "vue";

export const quizStore = defineStore("quizStoreByAttila", ()=>{
    const questions = ref([]);
    const userAnswers = ref([]);

    function addQuestion(question){
        questions.value.push(question);
    }

    function getQuestions(){
        return questions.value;
    }

    function getQuestionsLength(){
        return questions.value.length;
    }

    function addUserAnswer(answer){
        userAnswers.value.push(answer);
    }

    function getUserAnswers(){
        return userAnswers.value;
    }

    return {addQuestion, getQuestions, addUserAnswer, getUserAnswers, getQuestionsLength}
});

