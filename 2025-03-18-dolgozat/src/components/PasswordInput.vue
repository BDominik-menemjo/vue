<script setup>
    import { ref } from "vue";

    const password=ref("");
    const inputType=ref("password");

    const showPassword=()=>{
        if(inputType.value=="password"){
            inputType.value="text";
        }else{
            inputType.value="password";
        };
    };
</script>

<template>
    <input type="checkbox" @click="showPassword">
    <input :type="inputType" v-model="password" class="password">
</template>

<style scoped>

</style>
