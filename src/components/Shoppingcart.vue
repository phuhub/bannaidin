<template>
  <div class="container">
    <div class="row mt-2 content">
      <div class="col-2" v-for="product in products" :key="product.id">
        <div class="card" style="width: 15rem;">
          <img :src="product.url" class="card-img-top" />
          <div class="card-body">
            <h6 class="card-title">
              {{ product.name }} - $ {{ product.price }}
            </h6>
            <button
              :disabled="product.cart"
              @click="addProduct(product)"
              href="#"
              class="btn  btn-block"
              :class="{
                'btn-primary': !product.cart,
                'btn-success': product.cart,
              }"
            >
              {{ !product.cart ? "Add" : "Added" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <table class="table  text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="product.id">
            <th scope="row">{{ index +1}}</th>
            <th scope="row">
              <img :src="product.url" style="width: 4rem;" />
            </th>
            <td>{{ product.name }}</td>
            <td>
              {{ product.price }}
            </td>
            <td>
              <button
                @click="decreaseQ(product.id)"
                class="btn btn-primary btn-sm"
              >
                -
              </button>
              {{ product.quantity }}
              <button
                @click="increaseQ(product.id)"
                class="btn btn-primary btn-sm"
                size="sm"
              >
                +
              </button>
            </td>

            <td>
              <button @click="removeProduct(product.id)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>     
      </table>
      <div class="row">
        <div class="col text">
          <h1 v-if="(cart.length===1)">
            <h1>your price : {{total}} Baht</h1>
            <h1>discount : 0 Baht</h1>
            <h1>total :{{total}} Baht</h1>
          </h1>
          <h1 v-if="(cart.length===2)">
            <h1>your price : {{total}} Baht</h1>
            <h1>iscount : {{(cart.length*100*0.1)}} Baht</h1>
            <h1>total :{{(total-(cart.length*100*0.1))}}Baht</h1>
          </h1>
          <h1 v-if="(cart.length===3)">
            <h1>your price : {{total}} Baht</h1>
            <h1>discount : {{(cart.length*100*0.2)}} Baht</h1>
            <h1>total :{{(total-(cart.length*100*0.2))}}Baht</h1>
          </h1>
          <h1 v-if="(cart.length===4)">
            <h1>your price : {{total}} Baht</h1>
            <h1>discount : {{(cart.length*100*0.3)}} Baht</h1>
            <h1>total :{{(total-(cart.length*100*0.3))}}Baht</h1>
          </h1>
          <h1 v-if="(cart.length===5)">
            <h1>your price : {{total}} Baht</h1>
            <h1>iscount : {{(cart.length*100*0.4)}} Baht</h1>
            <h1>total :{{(total-(cart.length*100*0.4))}}Baht</h1>
          </h1>
          <h1 v-if="(cart.length===6)">
            <h1>your price : {{total}} Baht</h1>
            <h1>discount : {{(cart.length*100*0.5)}} Baht</h1>
            <h1>total :{{(total-(cart.length*100*0.5))}}Baht</h1>
          </h1>
          <h1 v-if="(cart.length===7)">
            <h1>your price : {{total}} Baht</h1>
            <h1>discount : {{(cart.length*100*0.6)}} Baht</h1>
            <h1> total :{{(total-(cart.length*100*0.6))}} Baht</h1>
          </h1>
        </div>
      </div>
    </div>
  </div>
   
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Shoppingcart",
  setup() {
    const store = useStore();
    function addProduct(p) {
      let product = { ...p };
      store.dispatch("addProduct", product);
    }
    function removeProduct(id) {
      store.dispatch("removeProduct", id);
    }
    function increaseQ(id) {
      store.dispatch("increase", id);
    }
    function decreaseQ(id) {
      store.dispatch("decrease", id);
    }
    return {
      addProduct,
      increaseQ,
      removeProduct,
      decreaseQ,
      cart: computed(() => store.getters.getCart),
      products: computed(() => store.getters.getProducts),
      total: computed(() => store.getters.getTotal),


    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
