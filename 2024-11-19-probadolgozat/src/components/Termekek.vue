<script setup>
    import Termek from "../classes/Termek.js";

    
</script>

<template>
    <section>
        <button class="kosar">Kosár</button>
    </section>
  <section>
    <h2>Termékek</h2>
  </section>
  <section>
    <div class="container">
        <div class="row">
            <div class="termekDiv col-lg-4">
                <img src="../assets/apple.png" alt="">
                <p>asd</p>
                <button>Kosárba</button>
            </div>
            <div class="termekDiv col-lg-4">
                <img src="../assets/apple.png" alt="">
                <p>asd</p>
                <button>Kosárba</button>
            </div>
            <div class="termekDiv col-lg-4">
                <img src="../assets/apple.png" alt="">
                <p>asd</p>
                <button>Kosárba</button>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
    .termekDiv{
        background-color: #d3d3d3;
        border-radius: 8px;
        margin: 10px auto;
        padding: 10px 20px;
    }
</style>
