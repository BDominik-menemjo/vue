<script setup>
    import {ref, watch} from "vue";
    import Guest from "../classes/Guest";

    var name = ref("");
    var email = ref("");
    var anypet = ref("");
    var pet = ref("");

    var guests=[];
    var max=ref(3);
    var errorMessage=ref("");
    var errorField=ref(0);

    const registration = () =>{
        errorMessage.value="";
        errorField.value=0;

        if(name.value.length == 0){
            errorMessage.value = "Fill your name!";
            errorField.value=1;
        }
        else if(email.value.length == 0){
            errorMessage.value = " Fill your e-mail!";
            errorField.value=2;
        }
        else if (anypet.value.length == 0){
            errorMessage.value = "Select your pet!";
            errorField.value=3;
        }
        else if (anypet.value == 1 && pet.value.length == 0){
            errorMessage.value = "Name your pet!";
            errorField.value=4;
        }else{
            var g = new Guest(name.value, email.value, pet.value);
            guests.push(g);
            max.value--;

            name.value=email.value=anypet.value=pet.value="";
        }
    }
    const reset = () =>{
        max.value=3;
        guests=[];
    }

    watch(anypet, ()=>{
        if(anypet.value != 1){
            pet.value="";
        }
    })
</script>
<template>
    <form v-if="max>0">
        <p>
            Free seats: {{ max }}<br>Hurry up!
        </p>
        <p class="error" v-if="errorMessage.length!=0">{{ errorMessage }}</p>
        <label>Name:</label>
        <input type="text" v-model="name" :class="{'red-border' : errorField == 1}">
        <label>Email:</label>
        <input type="text" v-model="email" :class="{'red-border' : errorField == 2}">
        <label>Did you bring any pets?</label>
        <select v-model="anypet" :class="{'red-border' : errorField == 3}">
            <option disabled value="">Choose!</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
        <div v-if="anypet==1">
            <label>Pet:</label>
            <input type="text" v-model="pet" :class="{'red-border' : errorField == 4}">
        </div>
        
        <button @click.prevent="registration()">Registration</button>
    </form>
    <div v-if="max==0">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Pet</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="guest in guests">
                    <td>{{ guest.getName() }}</td>
                    <td>{{ guest.getEmail() }}</td>
                    <td>{{ guest.getPet() }}</td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="reset()">Reset</button>
    </div>
</template>
<style scoped>
    
    label,
    input,
    select,
    button{
        display: block;
    }
    select{
        width: 100%;
    }
    input{
        width: calc(100% - 10px);
    }
    select,input{
        padding: 5px;
    }
    label{
        color: #34495F;
        padding: 7px 0px;
    }
    label,p,button{
        font-weight: 700;
    }
    p{
        text-align: center;
    }
    button{
        background-color: #3AB982;
        border: none;
        text-transform: uppercase;
        padding: 10px 20px;
        margin: 20px auto 0px auto;
        cursor: pointer;
    }
    button, .error, thead{
        color: #FFF;
    }
    button:hover, thead{
        background-color: #34495F;
    }
    .error{
        padding: 5px 0px;
        background-color: rgb(255, 5, 5);
    }
    .red-border{
        border: 2px solid rgb(255, 5, 5);
    }
    table{
        margin-top: 20px;
        width: 100%;
        border-collapse: collapse;
    }
    th,td{
        padding: 10px;
        border: 1px solid #000;
    }
</style>