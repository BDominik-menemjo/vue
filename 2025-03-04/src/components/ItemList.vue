<script setup>
  import { ref } from 'vue';
  const items=ref(["Apple", "Banana", "Oragne"]);

</script>
<template>
  <ul class="items">
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<style scoped>

</style>