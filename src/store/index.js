import Vue from 'vue';
import Vuex from 'vuex';
import Data from '../data/data';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        all: [],
        laptops: [],
        phones: [],
        cart: [],
        checkoutStatus: null
    },
    mutations: {
        setProducts(state, products) {
            state.all = products
        },
        setLaptops(state, products){
            state.laptops = products
        },
        setPhones(state, products){
            state.phones = products
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },
        addToCart(state, item) {
            state.cart.push({
                id: item.id,
                name: item.name,
                quantity: 1,
                price: item.price
            })
        },
        increaseQuantity(state, cartItem){
            const temp = state.cart.find(item => item.id === cartItem.id)
            temp.quantity++;
        }
    },
    actions: {
        getAllProducts({ commit }) {
            Data.getAll(products => {
                commit('setProducts', products)
            })
        },
        getLaptops({ commit }) {
            Data.getLaptops(products => {
                commit('setLaptops', products)
            })
        },
        getPhones({ commit }) {
            Data.getPhones(products => {
                commit('setPhones', products)
            })
        },
        addToCart ({ state, commit }, product) {
            commit('setCheckoutStatus', false)
            if (product.inventory > 0) {
              const item = state.items.find(item => item.id === product.id)
              if (!item) {
                commit('addToCart', item)
              } else {
                commit('increaseQuantity', item)
              }
            }
          }
    }
})

