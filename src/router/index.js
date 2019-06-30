import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue';
import Details from '../components/Details.vue';
import Laptops from '../components/Laptops.vue';
import Phones from '../components/Phones.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '',
            name : 'home',
            component: Home
        },
        {
            path: '/laptops',
            name: 'laptops',
            component: Laptops
        },
        {
            path: '/phones',
            name: 'phones',
            component: Phones
        },
        {
            path: '/shopping',
            name: 'shopping-cart',
            component: ShoppingCart
        },
        {
            path: '/details/:id',
            name: 'details',
            component: Details
        }
    ]
}) 