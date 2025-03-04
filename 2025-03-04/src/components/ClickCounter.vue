<script setup>
  import { ref } from 'vue';

  const count = ref(0);
</script>

<template>
    <div><img src="../assets/vue.svg" alt="Vue" title="Vue Logó"></div>
  <p>
    Count: {{ count }}
  </p>
  <div>
    <button @click="count++">Click me!</button>
  </div>
</template>

<style scoped>

</style>