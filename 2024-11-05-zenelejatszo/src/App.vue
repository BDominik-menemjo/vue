<script setup>
  import { ref } from 'vue';
  import Player from './components/Player.vue';
  import Playlist from './components/Playlist.vue';

  const selectedTrack=ref(null);

  const trackSelected=(track)=>{
    selectedTrack.value=track;
  }

</script>

<template>
  <header>
    <h1>Zenelejátszó</h1>
  </header>
  <main>
    <Playlist @trackSelected="trackSelected"/>
    <Player :track="selectedTrack"/>
  </main>
</template>

<style scoped>

</style>
