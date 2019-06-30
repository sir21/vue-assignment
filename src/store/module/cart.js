const state = {
    items: [],
    checkoutStatus: null
}

const getters = {
    getCartItems: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                name: product.name,
                price: product.price,
                quantity
            }
        })
    },
    totalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

const actions = {
    checkoutCart({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)

        commit('initCart', { items: [] })
        commit('buyProducts', products);
        commit('savedCartItems', savedCartItems);
    },
    addToCart({ state, commit }, item) {
        commit('setCheckoutStatus', null)
        if (item.inventory > 0) {
            const cartItem = state.items.find(item => item.id === item.id)
            if (!cartItem) {
                commit('addNewItemToCart', { id: item.id })
            } else {
                commit('IncreseQuantityByOne', cartItem)
            }
        }
    }
}

const mutations = {
    addNewItemToCart (state, { id }) {
      state.items.push({
        id,
        quantity: 1
      })
    },
  
    IncreseQuantityByOne (state, { id }) {
      const cartItem = state.items.find(item => item.id === id)
      cartItem.quantity++
    },
  
    initCart (state, { items }) {
      state.items = items
    },
  
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}