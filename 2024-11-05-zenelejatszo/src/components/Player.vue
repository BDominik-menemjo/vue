<script setup>
    import AudioPlayer from 'vue3-audio-player';
    import 'vue3-audio-player/dist/style.css';
    import Track from '../classes/Track.js';
    import { computed, defineProps, ref } from 'vue';

    const props=defineProps({
        track: Track
    });

    const audioRef=ref(null);

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

    const start=()=>{
        if(props.track && audioRef.value){
            audioRef.value.play();
        }else{
            alert("Nincs kiválasztott zeneszám!");
        }
    };

    const stop=()=>{
        if(props.track && audioRef.value){
            audioRef.value.pause();
        }
    };
</script>

<template>
    <section>
        <h2>Jelenlegi szám: <em>{{ trackInfo }}</em></h2>
        <AudioPlayer ref="audioRef" :option="audioOptions"/>
        <button @click="start()">Lejátszás</button>
        <button @click="stop()">Megállitás</button>
    </section>
    
</template>

<style scoped>
    section{
        text-align: center;
    }
    h2{
        font-size: 18px;
    }
    button{
        padding: 10px 15px;
        margin: 5px;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
    }
</style>