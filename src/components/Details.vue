<template>
  <div>
    <h3>{{product.name}}</h3>
    <div v-if="product.type === 'laptop'"><img src="../assets/images/laptop.jpg" /></div>
    <div v-if="product.type === 'phone'"><img src="../assets/images/phone.jpg" /></div>
    Brand: {{product.brand}}
    Year: {{product.year}}
    Price: Rs. {{product.price}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {   
  computed: mapGetters({
    product: 'getProduct'
  }),
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product, {root: true})
    }
  }
};
</script>

