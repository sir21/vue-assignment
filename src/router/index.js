import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Details from '../components/Details.vue';

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '',
            name : 'home',
            component: Home
        }, {
            path: '/details/:id',
            name: 'details',
            component: Details
        }
    ]
}) 