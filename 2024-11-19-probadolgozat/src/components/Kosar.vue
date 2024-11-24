<script setup>

</script>

<template>
    <section>
        <h2>Kosár</h2>
        <div v-if="kosar.length==0">
            <p>A kosár üres</p>
        </div>
        <div v-else>
            <ul>
               <li v-for="termek in kosar">
                    {{ termek.name }}
                    {{ darabszam }}
                    {{ darabszam*price }}
               </li> 
            </ul>
        </div>
    </section>
</template>

<style scoped>

</style>