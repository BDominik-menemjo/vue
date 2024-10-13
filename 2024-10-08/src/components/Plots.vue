<script setup>
    import { ref} from "vue";
    import {plotsData} from "../data/plots.js"
   
    var plots=ref(plotsData)
    var MAX = 5;
    var width=ref("");
    var length=ref("");
    var price=ref("");


    const AddToList=()=>{
        plots.value.push(
            {
                "width": width.value,
                "length": length.value,
               "price": price.value
            }
        );
        alert("Sikeres hozzáadás")
    }
    const clear=()=>{
        var valasz = confirm("Biztosan törli az adatokat?");
        if(valasz){
            plots.value.splice(2,3);
        }
    }

    const increase=()=>{
        plots.value[index].price*=1.5;
    }
</script>
<template>
    <div v-if="plots.length<MAX">
        <h2>Add plot /2</h2>
        <form>
            <label>Width (meter)</label>
            <input type="number">
            <label>Length (meter)</label>
            <input type="number">
            <label>Price (million HUF)</label>
            <input type="number">
            <button @click.prevent="AddToList()">Add to list</button>
        </form>
    </div>
    <div v-else>
        <h2>Plots for sale</h2>
        <table>
            <thead>
                <tr>
                    <th>Widht</th>
                    <th>Length</th>
                    <th>Price</th>
                    <th>Inc. Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(plot, index) in plots">
                    <td>{{ plot.width }}</td>
                    <td>{{ plot.length }}</td>
                    <td>{{ plot.price }}</td>
                    <td><span @click="increase(index)">increase</span></td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="clear()">Clear</button>
    </div>
</template>
<style scoped>
    h2{
        color: #34495F;
        border-bottom: 2px solid #34495F;
    }
    input, label, button{
        display: block;
        width: 100%;
        padding: 5px;
        border: none;
        border-radius: 7px;
    }
    input{
        width: calc(100%-14px);
    }
    button{
        padding: 10px 0px;
        margin-top: 20px;
    }
    thead, button{
        background-color: #34495F;
        color: #fff;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    th,td{
        padding: 10px;
        border: 1px solid #000;
    }
    span, button{
        text-transform: uppercase;
    }
    span{
        color:#3AB982;
        font-weight: 700;
    }
</style>