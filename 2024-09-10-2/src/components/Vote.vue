<script setup>
    import { films } from '../data/films';
    import {ref} from "vue"

    var filmList = ref(films);

    function getImageFromURL(url){
        return new URL(url, import.meta.url).href;
    }

    const vote = (i) =>{
        const f = filmList.value[i];
        f.vote=f.vote+1;
        sortFilms();
    };
    const sortFilms = () =>{
        filmList.value.sort((a,b)=>b.vote - a.vote);
    }
</script>

<template>
    <section v-for="(film, i) in filmList" class="df" v-blind:class="{'green-border':film.vote>=10}">
        <div>
            <img :src="getImageFromURL(film.image)" alt="Film" title="Film">
        </div>
        <div>
            <div class="df">
                <div><h2>{{ film.name }}</h2></div>
                <div><strong @click="vote(i)">Vote</strong> | {{film.vote}}</div>
            </div>
            <p>{{film.description}}</p>
        </div>
    </section>
</template>
<style scoped>
    .df{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    section{
        background-color: #efefef;
        padding: 10px;
        width: 60%;
        margin: 20px auto;
    }
    strong{
        color: green;
    }
    h2{
        margin: 0;
    }
    img{
        margin-right: 20px;
    }
    .green-border{
        border: 3px solid green;
    }
</style>