<script setup>
import { defineEmits, defineProps } from 'vue';
    const props=defineProps({
        kepek:Array
    });

    const emit=defineEmits(["addFavorite", "removeFavorite", "setLikes"]);

    const removeFavorite=(k)=>{
        emit("removeFavorite", k)
    }

    const addFavorite=(k)=>{
        emit("addFavorite", k);
    }

    const setLikes=(k)=>{
        emit("setLikes", k)
    }
</script>

<template>
    <div class="d-flex flex-wrap">
        <div class="card m-2" style="width: 10rem;" v-for="kep in kepek">
            <div class="card-body">
                <p class="m-0"><img :src="kep.getUrl()" alt="kutyakép" class="card-img-top"></p>
                <p class="m-0 p-2 text-center">
                    <i v-if="kep.getIsFavorite()" class="bi bi-star-fill red" @click="removeFavorite(kep)"></i>
                    <i v-else class="bi bi-star-fill" @click="addFavorite(kep)"></i>
                    <p v-if="kep.getIsFavorite()"><i class="bi bi-hand-thumbs-up-fill" @click="setLikes(kep)"></i> {{ kep.getLikes() }}</p>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    i{
        color: yellow;
    }
    i.red{
        color:red;
    }
</style>