<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    cartItems: Array
});

const emit = defineEmits(['updateCart', 'goToCheckout']);

const removeItem = (index) => {
    props.cartItems.splice(index, 1);
    emit('updateCart', props.cartItems);
};

const checkout = () => {
    emit('goToCheckout');
};
</script>

<template>
    <section>
        <h2>Kosár</h2>
        <div v-if="cartItems.length === 0">
            <p>A kosár üres.</p>
        </div>
        <div v-else>
            <table>
                <thead>
                    <th>Termék</th>
                    <th class="text-center">Darabszám</th>
                    <th class="text-center">Ár</th>
                    <th class="text-end">Törlés</th>
                </thead>
                <tr v-for="(item, index) in cartItems">
                    <td><strong>{{ item.getName() }}</strong></td>
                    <td class="text-center">{{ item.getPiece() }}</td>
                    <td class="text-center">{{ item.getPrice() * item.getPiece() }} Ft</td>
                    <td class="text-end"><button class="btn btn-danger" @click="removeItem(index)">Törlés</button></td>
                </tr>
            </table>
            <p class="text-center"><button class="btn btn-success" @click="checkout">Tovább a fizetéshez</button></p>
        </div>
    </section>
</template>