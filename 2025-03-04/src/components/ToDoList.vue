<script setup>
import { ref } from 'vue';
import { datas } from '../data/list.js'

const todos=ref(datas);
</script>

<template>
    <ul class="todo">
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
</template>

<style scoped>

</style>