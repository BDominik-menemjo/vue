<script setup>
import { defineProps, defineEmits } from 'vue';

const props=defineProps({
    dad: String,
    id: Number
});

const emit=defineEmits(['happy','sad']);

const happy=()=>{
    emit("happy");
}

const sad=()=>{
    emit("sad");
}
</script>

<template>
<section>
    <h2>Gyerek {{ props.id }}</h2>
    <p v-if="props.dad">Tudom ki az apám: {{ props.dad }}</p>
    <p v-else>Ki az apám?</p>
    <button @click="happy">Örülök neki</button>
    <button @click="sad">NEM IGAZ</button>
</section>
</template>

<style scoped>

</style>