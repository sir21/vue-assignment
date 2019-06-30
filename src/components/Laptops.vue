<template>
  <div class="laptops">
    <h1>Laptops</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.name}}
        {{product.price}}
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
      this.$store.dispatch("addToCart", product, {root: true})
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


