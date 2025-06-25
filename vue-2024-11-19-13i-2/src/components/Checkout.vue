<script setup>
import { defineProps, computed, defineEmits } from 'vue';

const props = defineProps({
    cartItems: Array
});

const emit = defineEmits(['clearCart']);

const totalPrice = computed(() => {
    var sum = 0;
    for (let index = 0; index < props.cartItems.length; index++) {
        sum += props.cartItems[index].getPiece() * props.cartItems[index].getPrice();
    }
    return sum;
});

const pay = () => {
    alert('Sikeres fizetés!');
    emit('clearCart');
};
</script>

<template>
    <section>
        <h2>Fizetés</h2>
        <table>
            <thead>
                <th>Termék</th>
                <th class="text-center">Darabszám</th>
                <th class="text-end">Ár</th>
            </thead>
            <tr v-for="(item, index) in cartItems">
                <td><strong>{{ item.getName() }}</strong></td>
                <td class="text-center">{{ item.getPiece() }}</td>
                <td class="text-end">{{ item.getPrice() * item.getPiece() }} Ft</td>
            </tr>
        </table>
        <p class="text-end sum">Összesen: {{ totalPrice }} Ft</p>
        <p class="text-center"><button class="btn btn-success" @click="pay">Fizetés</button></p>

    </section>
</template>
<style scoped>
.sum {
    font-size: 26px;
    font-weight: 600;
}
</style>