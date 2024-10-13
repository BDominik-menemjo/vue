<script setup>
import Plots from './components/Plots.vue'
</script>

<template>
  <header>
        <h1>Plots for sale App</h1>
    </header>
    <main>
        <Plots />
    </main>
    <footer>
      <p>&copy; Copyright</p>
    </footer>
</template>

<style scoped>
  header, footer{
    background-color: #3AB982;
    padding: 15px 0px;
    color: #fff;
    text-align: center;
  }
  main{
    background-image: url(assets/plots-bg.jpg);
    min-height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 30px;
  }
  section{
    background-color: rgba(255,255,255,0.7);
    padding: 20px;
    width: calc(90%-40px);
    margin: 0 auto;
    border-radius: 10px;
  }
</style>
