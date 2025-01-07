<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import Event from "../classes/Event.js"
import { state } from "../state/state.js"

const props = defineProps({
    visible: Boolean
});

const emits = defineEmits(["add", "cancel"]);
const day = ref(0);
const name = ref("");
const from = ref("");
const to = ref("");

const cancel = () => {
    emits("cancel");
}
const add = () => {
    cancel();
    var e = new Event(name.value, from.value, to.value);
    state.events[day.value].push(e);
}
</script>
<template>
    <div class="modal" v-if="visible">
        <h2>Add event</h2>
        <p>
            <label>Day</label>
            <select v-model="day">
                <option :value="0">Monday</option>
                <option :value="1">Tuesday</option>
                <option :value="2">Wednesday</option>
                <option :value="3">Thursday</option>
                <option :value="4">Friday</option>
                <option :value="5">Saturday</option>
                <option :value="6">Sunday</option>
            </select>
        </p>
        <p>
            <label>Name</label>
            <input type="text" v-model="name">
        </p>
        <p>
            <label>From:</label>
            <input type="time" v-model="from">
        </p>
        <p>
            <label>To:</label>
            <input type="time" v-model="to">
        </p>
        <p class="buttons">
            <button @click="cancel">Cancel</button>
            <button @click="add">Add</button>
        </p>
    </div>
</template>
<style scoped>
.modal {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #efefef;
    padding: 20px 30px;
    color: #000;
    border-radius: 15px;
}

h2 {
    margin: 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #aaa;
}

h2,
.buttons {
    text-align: center;
}

label {
    display: block;
}

label,
.buttons button {
    font-weight: 700;
}

input,
select,
.buttons button {
    border: none;
}

input,
select {
    width: calc(100%-20px);
    padding: 7px 10px;
    display: block;
}

select {
    width: 100% !important;
}

.buttons button {
    padding: 10px 20px;
    color: #fff;
    border-radius: 10px;
    margin: 0px 10px;
}

.buttons button:first-of-type {
    background-color: red;
}

.buttons button:last-of-type {
    background-color: green;
}
</style>