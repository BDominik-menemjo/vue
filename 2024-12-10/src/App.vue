<script setup>
  import Cart from './components/Cart.vue';
  import Products from './components/Products.vue';
  import { ref } from 'vue';
  
  const nofp=ref(0);
  const setNofp=(newNofp)=>{
    nofp.value=newNofp;
  };
</script>

<template>
  <header>
    <h1 class="text-center">Cart App</h1>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <Cart />
        </div>
        <div class="col-lg-9">
          <Products :numberOfProducts="nofp" @nofpEvent="setNofp"/>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="container">
      <p class="text-end"># of product {{ nofp }}</p>
    </div>
  </footer>
</template>

<style scoped></style>
