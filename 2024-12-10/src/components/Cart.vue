<script setup>
import {ref, watchEffect} from 'vue';
import { state } from '../state/state.js';

const cartProducts=ref([]);
const cartProductsPrint=ref([]);

const summa =ref(0);
const pieces=ref(0);

watchEffect(()=>{
    if(state.product){
        var index=cartProducts.value.findIndex(p => p.getName()===state.product.getName());
        if(index==-1){
            cartProducts.value.push(state.product);
        }else{
            cartProducts.value[index].setPiece(cartProducts.value[index].getPiece()+1);
        }
        cartProductsPrint.value={...cartProducts.value};

        summa.value=0;
        pieces.value=0;
        for(var i=0;i<cartProducts.value.length;i++){
            summa.value+=cartProducts.value[i].getPrice()*cartProducts.value[i].getPiece();
            pieces.value+=cartProducts.value[i].getPiece();
        }
    }
});

const checkout=()=>{
    pieces.value=summa.value=0;
    state.product=null;
    cartProducts.value=cartProductsPrint.value=[];
}
</script>
<template>
    <aside>
        <h2>Cart</h2>
        <div class="cartProduct" v-for="product in cartProductsPrint">
            <h3>{{ product.getName() }}</h3>
            <div class="d-flex">
                <p class="price">$ {{ product.getPrice() }}</p>
                <p>Quantity: {{ product.getPiece() }}</p>
            </div>
        </div>
        <div class="total text-end" v-if="cartProducts.length>0">Total quantity: {{ pieces }}</div>
        <div class="mb-3" v-if="cartProducts.length>0">
            <button type="button" class="btn" @click="checkout">Checkout ($ {{ summa }})</button>
        </div>
    </aside>
</template>

<style scoped>
aside{
    padding-top: 20px;
}
h3 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
}

.cartProduct .d-flex {
    justify-content: space-between;
}
.cartProduct{
    border-bottom: 1px solid #aaa;
}
.total, .cartProduct{
    padding-top: 15px;
}

</style>