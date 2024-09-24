<script setup>
    import {airports} from "../data/airports.js";
    import {ref, watch} from 'vue';
   
    var ap = ref("");
    var country=ref("");
    var city=ref("");
    var phone=ref("");

    const searchAirport=(ap)=>{
        for(var i=0;i<airports.length; i++){
            if(airports[i].name == ap){
                country.value = airports[i].country.name.en;
                city.value = airports[i].city.name.en;
                phone.value = airports[i].contacts.phone;
            }
        }
    }

    watch(ap, ()=>{
        searchAirport(ap);
    })
</script>
<template>
    <section>
        <p><img src="../assets/airport-logo.avif" alt="Airport logo" title="Airport logo"></p>
        <form>
            <div class="green df">
                <p>Choose an airport!</p>
                <select v-model="ap">
                    <option value="">Select please!</option>
                    <option v-for="airport in airports" :value="airport.name">{{ airport.name}}</option>
                </select>
            </div>  
        </form>
        <div v-if="ap.length != 0" class="card">
            <h2><span>Airport: </span> {{ ap }}</h2>
            <p><span>Country:</span> {{country}}</p>
            <p><span>City: </span> {{city}}</p>
            <p><span>Phone: </span> {{phone}}</p>
        </div>
    </section>   
</template>
<style scoped>
    .df{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .green{
        background-color: #3AB982;
        padding: 30px;
    } 
    #airports{
        padding: 10px;
    }
    
</style>