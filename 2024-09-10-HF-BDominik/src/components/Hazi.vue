<script>
    import { ref } from 'vue';

    const showFirst = ref(true);
</script>
<template>
    <div>
        <p v-if="showFirst">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p v-if="!showFirst">Illum, sequi, alias ex delectus aspernatur praesentium recusandae vitae molestiae nemo cumque vel, quae consequatur necessitatibus deleniti repellat at rerum quaerat eligendi.</p>
    </div>
</template>
<style scoped>
</style>