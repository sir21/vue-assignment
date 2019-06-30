import { mapActions } from 'vuex';

test('Get all products when directed to home', () => {
    const state = {
      all: []
    }
    const all = []
    mapActions.getAllProducts()
    expect(state.all).toBe(all)
  })