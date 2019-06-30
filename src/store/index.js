import Vue from 'vue';
import Vuex from 'vuex';
import Data from '../data/data';
import { log } from 'util';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        all: [],
        laptops: [],
        phones: [],
        cart: [],
        cartDetails: {
            status: false,
            amount: 0,
            discount: 0,
            tax: 0,
            total: 0,
            subTotal: 0
        },
        selectedProduct: {}
    },
    getters: {
        getProduct: state => state.selectedProduct,
        getCartDetails: state => state.cartDetails,
        getCart: state => state.cart
    },
    mutations: {
        setProducts(state, products) {
            state.all = products
        },
        setLaptops(state, products) {
            state.laptops = products
        },
        setPhones(state, products) {
            state.phones = products
        },
        setCheckoutStatus(state, status) {
            state.cartDetails.status = status
        },
        addToCart(state, item) {
            state.cart.push({
                id: item.id,
                name: item.name,
                quantity: 1,
                price: item.price,
                amount: (item.price)
            })
        },
        increaseQuantity(state, cartItem) {
            const temp = state.cart.find(item => item.id === cartItem.id)
            temp.quantity++;
            temp.amount += temp.price;
        },
        getCartItems(state) {
            state.cart.forEach(item => {
                state.cartDetails.subTotal += item.amount;
            });
            log('subTotal' + state.cartDetails.subTotal);
            state.cartDetails.discount = (Math.floor(state.cartDetails.subTotal, 500)) * 0.02;
            state.cartDetails.tax = state.cartDetails.subTotal * 0.12;
            state.cartDetails.total = (state.cartDetails.subTotal + state.cartDetails.tax) - state.cartDetails.discount;
        },
        selectProduct(state, product) {
            state.selectedProduct = product;
        },
        emptyCart(state) {
            state.cartDetails = {
                status: false,
                amount: 0,
                discount: 0,
                tax: 0,
                total: 0,
                subTotal: 0
            },
            state.cart = []
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
        addToCart({ state, commit }, product) {
            log('start add to cart');
            const item = state.cart.find(item => item.id === product.id)
            if (!item) {
                commit('addToCart', product)
            } else {
                commit('increaseQuantity', item)
            }
            commit('setCheckoutStatus', true)
        },
        getItems({ state, commit }) {
            if (state.cartDetails.status === true)
                commit('getCartItems')
        },
        selectProduct({ commit }, product) {
            log('selecting product');
            commit('selectProduct', product);
        },
        checkout({commit}) {
            log('checkout');
            commit('emptyCart');
        }
    }
})

