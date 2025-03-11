<script setup>
    import { defineEmits, defineProps } from 'vue';  

    const props=defineProps({
        name: String
    });

    const emit=defineEmits(["greet"])

    const sendGreetings=()=>{
        if(props.name!=""){
            const greeting="Hello "+props.name+" in VueWorld!";
            emit("greet", greeting)
        }
    }

</script>

<template>
    <h2>Child</h2>
    <button @click="sendGreetings">Send greetings!</button>
</template>