<script setup>
    import {a,b,c,d} from "../data/arrays.js";
    import {ref} from "vue";

    const bs = ref("");

    const general = () =>{
        var ai = parseInt(Math.random()*a.length);
        var bi = parseInt(Math.random()*b.length);
        var ci = parseInt(Math.random()*c.length);
        var di = parseInt(Math.random()*d.length);

        bs.value = a[ai]+" "+b[bi]+" "+c[ci]+" "+d[di];
    };
</script>

<template>
    <p><img src="../assets/bs.png" title="Bullshit generátor" alt="Bullshit generátor"></p>
    <p class="btn"><a href="" @click.prevent="general()">Bullshit generálása</a></p>
    <p v-if="bs.length!=0">Sok szituációban jól jöhet egy igazi bullshit</p>
    <p class="bs" v-if="bs.length!=0">{{bs}}</p>
</template>

<style scoped>
.btn,.bs{
    background-color: #3AB982;
    display: inline;
    padding: 10px 20px;
    border-radius: 10px;
}
p{
    margin: 30px 0px;
}
.bs{
    display: block;
}
.btn:hover, .bs{
    background-color: #34495F;
}
</style>