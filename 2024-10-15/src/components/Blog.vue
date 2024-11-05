<script setup>
import { defineProps, defineEmits } from "vue"

/*
const props = defineProps({
    title: String,
    body: String,
    likes: Number,
    show: Boolean
})*/

const props = defineProps({
    blog: Object
})

const emit = defineEmits(['increase-likes'])

const increaseLikes = () =>{
    emit('increase-likes')
}

</script>
<template>
    <!-- <div class="blog">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <p>Likes: {{ likes }}</p>
    </div> -->
    <div class="blog">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.body }}</p>
        <div class="df">
            <p>Likes: {{ blog.likes }}</p>
            <p><a @click="increaseLikes()">Like</a></p>
        </div>
        
    </div>
</template>

<style scope>
.blog{
    border-bottom: 1px solid #fff;
}
.df{
    display: flex;
    justify-content: space-between;
}
a{
    background-color: #ccc;
    color: #000;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}
a:hover{
    background-color: #000;
    color: #ccc;
}
</style>