<template>
  <div class="phones">
    <h1>Phones</h1>
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
    products: state => state.phones
  }),
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product, {root: true})
    }
  },
  created() {
    this.$store.dispatch("getPhones");
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


