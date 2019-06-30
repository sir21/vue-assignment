import data from '../../assets/data/products.json'

const state = {
    laptops: [],
    phones: [],
    all: []
}

const actions = {
    getAllProducts({ commit }) {
        let all = [];
        all = data;
        commit('setAll', all);
    },
    getLaptopsProducts({ commit }) {
        let laptops  = [];
        data.forEach(item => {
            item.type === 'laptop'
            laptops.push(item);
        });
        commit('setLaptops', laptops)
    },
    getPhonesProducts({ commit }) {
        let phones  = [];
        data.forEach(item => {
            item.type === 'phone'
            phones.push(item);
        });
        commit('setLaptops', phones)
    }
}

const mutations = {
    setLaptops(state, laptops) {
        state.laptops = laptops
    },
    setPhones(state, phones) {
        state.phones = phones
    },
    setAll(state, all) {
        state.all = all
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}
