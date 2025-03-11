<script setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';

const response=ref("");
const name=ref("");

const handleGreet=(message)=>{
    response.value=message;
}
</script>

<template>
    <h2>Parent</h2>
    <input type="text" v-model="name">
    <ChildComponent :name="name" @greet="handleGreet"/>
    <p>{{ response }}</p>
</template>