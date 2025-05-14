<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    karakterek: Array,
    kedvencek: Boolean
});

const emit = defineEmits(["add"]);

const add = (index)=>{
    emit("add", index);
}

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Név</th>
                <th>Faj</th>
                <th>Szint</th>
                <th v-if="!kedvencek">Kiválaszt</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(karakter, index) in karakterek">
                <td>{{ karakter.getNev() }}</td>
                <td>{{ karakter.getFaj() }}</td>
                  <td>{{ karakter.getSzint() }}</td>
                <td v-if="!kedvencek"><button type="button" class="btn btn-light" @click="add(index)">Kérem!</button></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table{
        width: 100%;
    }
    td,th{
        padding: 10px;
        border: 1px solid #fff;
        border-collapse: collapse;
        text-align: center;
    }
    thead{
        background-color: aqua;
        text-transform: uppercase;
    }
</style>