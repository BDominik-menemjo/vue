<script setup>
    import Track from '../classes/track';
    import {t} from "../data/tracks.js";
    import { computed, defineEmits } from 'vue';

    var tracks=[];
    for(var i=0; i<t.length; i++){
        var tr = new Track(t[i].title, t[i].artist, t[i].file);
        tracks.push(tr);
    }

    const emit=defineEmits(['trackSelected'])

    const selectedTrack = (track) =>{
        emit('trackSelected', track);
    }

</script>

<template>
    <section>
        <h2>Lejátszási lista</h2>
        <ul>
            <li v-for="track in tracks" @click="selectedTrack(track)">
                {{ track.getTitle() }} - {{ track.getArtist() }}
            </li>
        </ul>
    </section>
</template>

<style scoped>
section{
    border-bottom: 1px solid #fff;
    padding-bottom: 30px;
}
    ul{
        padding: none;
        width: 70%;
    }
    li{
        border-radius: 5px;
        list-style-type: none;
        background-color: #ccc;
        padding: 5px 10px;
        margin-bottom: 5px;
    }
    li:hover{
        cursor: pointer;
        background-color: #fff;
    }
</style>