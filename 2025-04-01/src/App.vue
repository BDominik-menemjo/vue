<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
    <header>
        <h1 class="text-center">KutyaAPI</h1>
        <Navigation />
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <p class="text-center pt-5">Minden jog fenntartva!</p>
    </footer>
</template>

<style scoped>

</style>
