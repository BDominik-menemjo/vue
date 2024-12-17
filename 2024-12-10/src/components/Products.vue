<script setup>
    import {prods} from '../data/productsData.js';
    import { ref, computed, defineProps, defineEmits, watchEffect } from 'vue';
    import { state } from '../state/state.js';
    import Product from '../classes/Product.js';
    
    const emit = defineEmits(["nofpEvent"]);

    const props=defineProps({
        numberOfProducts:Number
    })

    const search=ref("");
    const products=ref(prods);
    const addedProduct=ref();

    const filteredProducts= computed(()=>{
        var tmp = products.value.filter(product=>
        product.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())||
        product.desc.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())||
        product.price == search.value);
        props.numberOfProducts = tmp.length; //ez nélkül is meg lehet csinálni
        emit("nofpEvent", tmp.length);
        return tmp;
    });

    const addToCart = (p) =>{
        var prod = new Product(p.name, p.price, 1)
        addedProduct.value={...prod};
    }

    watchEffect(()=>{
        state.product=addedProduct.value;
    });
</script>
<template>
    <section>
        <h2>Products</h2>
        <div class="mb-3">
            <input type="search" v-model="search" class="form-control" placeholder="Filter...">
        </div>
        <div class="products">
            <div class="product d-flex" v-for="product in filteredProducts">
                <div>
                    <h3>{{ product.name }}</h3>
                    <p>{{product.desc}}</p>
                    <p class="price">$ {{product.price}}</p>
                </div>
                <div>
                    <button type="button" class="btn cartButton" @click="addToCart(product)">Add to cart</button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
h3{
    font-size: 17px;
    font-weight: 700;
}
section{
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
}
.product:last-of-type{
    border-bottom: none;
    margin-bottom: 0;
}
.product{
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
}
.cartButton{
    width: 150px;
    margin-left: 50px;
}
.form-control{
    border: 10px solid #ccc;
    margin-top: 15px;
}
</style>