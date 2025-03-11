<script setup>
import { defineEmits } from 'vue';

const emit=defineEmits(["click"]);

function onClick(){
    emit("click");
}
</script>

<template>
    <button @click="onClick">Click me!</button>
</template>