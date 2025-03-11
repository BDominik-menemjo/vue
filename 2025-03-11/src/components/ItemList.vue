<script setup>
    import { defineProps } from 'vue';

    const props=defineProps({
        items:Array
    });

    const emit=defineEmits(["item-selected"]);
    const selectedItem=(item)=>{
        emit("item-selected", item);
    }
</script>

<template>
    <ul>
        <li v-for="item in items" @click="selectedItem(item)">{{ item.name }}</li>
    </ul>
</template>