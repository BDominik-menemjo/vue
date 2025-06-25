<script setup>
import { ref } from 'vue';
import { products } from "./data/products.js";
import ShopCart from "./components/ShopCart.vue";
import Checkout from "./components/Checkout.vue";
import Cart from "./classes/cart.js";

const productItem = ref(0);
const cartItems = ref([]);
const showCart = ref(false);
const showCheckout = ref(false);

const getImageURL = (imageURL) => {
  return new URL(imageURL, import.meta.url).href;
};

const add = (product) => {
  var existingProduct = false;
  for (let index = 0; index < cartItems.value.length; index++) {
    if (cartItems.value[index].getName() == product.name) {
      existingProduct = true;
      cartItems.value[index].setPiece(cartItems.value[index].getPiece() + 1);
    }
  }
  if (!existingProduct) {
    let newItem = new Cart(product.name, 1, product.price);
    cartItems.value.push(newItem);
    productItem.value += 1;
  }
  //Rövidebb megoldás: 
  /*let existingProduct = cartItems.value.find(item => item.getName() === product.name);
  if (existingProduct) {
    existingProduct.setPiece(existingProduct.getPiece() + 1);
  } else {
    ugyanaz... 
  } */
};

const goToCart = () => {
  showCart.value = true;
  showCheckout.value = false;
};

const goToCheckout = () => {
  showCart.value = false;
  showCheckout.value = true;
};

const goToShopping = () => {
  showCart.value = false;
  showCheckout.value = false;
};

const clearCart = () => {
  cartItems.value = [];
  productItem.value = 0;
  showCart.value = false;
  showCheckout.value = false;
};

const updateCart = (items) => {
  cartItems.value = items;
};

</script>

<template>
  <nav>
    <ul class="d-flex p-0">
      <li v-if="showCart" @click="goToShopping"><i class="bi bi-bag-fill"></i> Vásárlás</li>
      <li v-if="!showCart" @click="goToCart"><i class="bi bi-basket-fill"></i> Kosár ({{ cartItems.length }})</li>
      <li v-if="showCart" @click="goToCheckout"><i class="bi bi-credit-card"></i> Fizetés</li>
    </ul>
  </nav>
  <header class="text-center">
    <h1>Webáruház</h1>
  </header>
  <main>
    <section v-if="!showCart && !showCheckout">
      <h2>Termékek</h2>
      <div class="products d-flex">
        <div class="product text-center" v-for="product in products">
          <img :src="getImageURL(product.img)" alt="Product Image">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} Ft</p>
          <button type="button" class="btn btn-warning" @click="add(product)">Kosárba</button>
        </div>
      </div>
    </section>
    <!-- 
      Rövidebben:
      <ShopCart v-if="showCart" :cartItems="cartItems" @updateCart="cartItems = $event" @goToCheckout="goToCheckout" />
     -->
    <ShopCart v-if="showCart" :cartItems="cartItems" @updateCart="updateCart" @goToCheckout="goToCheckout" />
    <Checkout v-if="showCheckout" :cartItems="cartItems" @clearCart="clearCart" />
  </main>
  <footer>
    <p class="text-center">Copyright - All rights reserved!</p>
  </footer>
</template>
<style scoped>
.products {
  justify-content: space-between;
}

.product {
  border-radius: 10px;
  width: 30%;
  border: 1px solid #ccc;
  padding: 30px;
  background-color: #fff;
  color: #000;
}

.product img {
  max-width: 50%;
}

nav .d-flex {
  justify-content: space-between;
}

nav li {
  list-style-type: none;
}

nav li:hover {
  cursor: pointer;
}

nav li i {
  padding-right: 10px;
}

nav li:hover i {
  color: #ffc107;
  padding-right: 20px;
}
</style>
