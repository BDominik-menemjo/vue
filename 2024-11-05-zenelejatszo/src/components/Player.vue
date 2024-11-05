<script setup>
    import AudioPlayer from 'vue3-audio-player';
    import 'vue3-audio-player/dist/style.css';
    import Track from '../classes/Track.js';
    import { computed, defineProps } from 'vue';

    const props=defineProps({
        track: Track
    });

    const trackInfo = computed(()=>
        props.track ? props.track.getTitle() +"-"+props.track.getArtist() : "Nincs zeneszám kiválasztva!"
    );

    
    function getAudioURL(audioURL){
        return new URL(audioURL, import.meta.url).href;
    }

    const audioOptions = computed(()=>({
        src: props.track ? getAudioURL(props.track.getFile()) : '',
        title: props.track ? props.track.getTitle() : "Nincs zeneszám"
    }));
</script>

<template>
    <section>
        <h2>Jelenlegi szám: <em>{{ trackInfo }}</em></h2>
        <AudioPlayer :option="audioOptions"/>
    </section>
    
</template>

<style scoped>
    section{
        text-align: center;
    }
    h2{
        font-size: 20px;
    }
</style>