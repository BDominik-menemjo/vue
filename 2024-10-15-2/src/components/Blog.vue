<script setup>
import { defineProps, defineEmits } from "vue"
import { comments } from "../data/blogs.js"

/*
const props = defineProps({
    title: String,
    body: String,
    likes: Number,
    show: Boolean
})*/

const props = defineProps({
    blog: Object,
    isReading: Boolean
})

const emit = defineEmits(['increase-likes', 'read-more', 'back'])

const increaseLikes = () => {
    emit('increase-likes')
}

const readMore = () => {
    emit('read-more')
}

const back = () => {
    emit('back')
}

const lead = props.blog.body.substring(0, 100)

</script>
<template>
    <!-- <div class="blog">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <p>Likes: {{ likes }}</p>
    </div> -->
    <div class="blog">
        <h2>{{ blog.title }}</h2>
        <p v-if="!isReading">{{ lead }}...<br><span @click="readMore()">Read more &raquo;</span></p>
        <p v-else>{{ blog.body }}</p>

        <div class="df" v-if="!isReading">
            <p>Likes: {{ blog.likes }}</p>
            <p><a @click="increaseLikes()">Like</a></p>
        </div>
        <div v-else>
            <div v-if="blog.comments.length>0">
                <h2>Comments</h2>
                <ul>
                    <li>A</li>
                    <li>B</li>
                </ul>
            </div>
            <span @click="back()">&laquo; Back</span>
        </div>
    </div>
</template>

<style scope>
span {
    color: aqua;
}

.blog {
    border-bottom: 1px solid #fff;
    padding-bottom: 15px;
}

.df {
    display: flex;
    justify-content: space-between;
}

a {
    background-color: #ccc;
    color: #000;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}

a:hover {
    background-color: #000;
    color: #ccc;
}
</style>