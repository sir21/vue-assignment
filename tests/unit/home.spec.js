import Home from '@/components/Home.vue'

describe('Home', () => {
    it('has a created hook', () => {
        expect(typeof Home.created).toBe('function')
    })
})