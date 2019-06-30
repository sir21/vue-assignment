<template>
  <div class="shoppingCart">
    <div v-if="cartDetails.status === false">No Items in cart</div>
    <div v-if="cartDetails.status === true">
      <h3>Shopping Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price (Rs.)</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.quantity}}</td>
            <td class="price">{{item.price}}.00</td>
            <td class="price">{{item.amount}}.00</td>
          </tr>
          <tr>
            <td class="summary" colspan="3">Sub Total</td>
            <td class="price">{{cartDetails.subTotal}}.00</td>
          </tr>
          <tr>
            <td class="summary" colspan="3">VAT</td>
            <td class="price">{{cartDetails.tax}}.00</td>
          </tr>
          <tr>
            <td class="summary" colspan="3">Discount</td>
            <td class="price">{{cartDetails.discount}}.00</td>
          </tr>
          <tr>
            <td class="summary" colspan="3">Total</td>
            <td class="price">{{cartDetails.total}}.00</td>
          </tr>
        </tbody>
      </table>
      <button @click="checkout()">Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    cartDetails: "getCartDetails",
    items: "getCart"
  }),
  methods: {
    checkout() {
      this.$store.dispatch("checkout");
    }
  },
  created() {
    this.$store.dispatch("getItems");
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

td, th {
  border: 0.5px solid #ddd;
}

.summary {
  font-style: italic;
  text-align: center;
}

.price {
  text-align: right;
}

button {
  float: right;
}
</style>


