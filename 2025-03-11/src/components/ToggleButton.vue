<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const emit=defineEmits(['update']);
const props=defineProps({
    checked:Boolean
});
const buttonChecked=ref(props.checked);
function toggle(){
    buttonChecked.value=!buttonChecked.value;
    emit('update', buttonChecked.value)
}
</script>

<template>
    <button @click="toggle">{{ buttonChecked?"ON":"OFF" }}</button>
</template>

<style scoped>

</style>