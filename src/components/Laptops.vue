<template>
  <div class="laptops">
    <h3>Laptops</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        Product Name: {{product.name}}
        <br />
        Brand: {{product.brand}}
        <br />
        Price: Rs. {{product.price}}
        <span @click="selectProduct(product)">
          <router-link :to="`/details/${product.id}`">Preview</router-link>
        </span>
        <br />
        <div>
          <img src="../assets/images/laptop.jpg" width="200px" height="200px" />
        </div>
        <br />
        <button @click="addToCart(product)">Add item to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    products: state => state.laptops
  }),
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product, { root: true });
    },
    selectProduct(product) {
      this.$store.dispatch("selectProduct", product, { root: true });
    }
  },
  created() {
    this.$store.dispatch("getLaptops");
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  background-color: beige;
  padding: 10px 0 10px 0;
}
li {
  background-color: grey;
  padding: 12px 20px 12px 20px;
}
</style>


