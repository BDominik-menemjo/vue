<script setup>
  import { ref } from 'vue'
  import Plot from '../classes/Plot'

  var width = ref("");
  var length = ref("");
  var price = ref("");
  var max = ref(5);
  var cnt = ref(1);

  var plots=[];

  const AddToList = () =>{
    var p = new Plot(width.value, length.value, price.value);
    plots.push(p);
    width.value=length.value=price.value="";
    max.value--;
    cnt.value++;
  }

  const clear=()=>{
    max.value=5;
    plots=[];
    cnt.value=1;
  }
</script>

<template>
  <form v-if="max>0">
    <h2>Add plot(5/{{ cnt }})</h2>
    <hr>
    <label>Width (meter)</label>
    <input type="number" v-model="width">
    <label>Length (meter)</label>
    <input type="number" v-model="length">
    <label>Price (million HUF)</label>
    <input type="number" v-model="price">

    <button @click.prevent="AddToList()">Add to list</button>
  </form>
  <div v-if="max==0">
    <table>
      <thead>
        <tr>
          <th>Width</th>
          <th>Length</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plot in plots">
          <td>{{ plot.getWidth() }}</td>
          <td>{{ plot.getLength() }}</td>
          <td>{{ plot.getPrice() }}</td>
          <td><button >Increase price</button></td>
        </tr>
      </tbody>
    </table>
    <button @click.prevent="clear()">Clear</button>
  </div>
  <footer>Plots for sale App</footer>
</template>

<style scoped>
  label,
  input,
  button{
      display: block;
  }
  input{
      width: calc(100% - 12px);
      border-radius: 5px;
      padding: 7px 0px;
  }
  label{
    padding: 7px 0px;
  }
  button,footer{
    font-weight: 700;
  }
  h1,footer, button{
    text-align: center;
    color: #fff;
  }
  button{
    background-color: #34495F;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    margin: 20px auto 0px auto;
    border-radius: 10px;
  }
  
</style>
