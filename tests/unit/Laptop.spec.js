import Laptop from '@/components/Laptops.vue'

describe('Laptop', () => {
    it('has a created hook', () => {
        expect(typeof Laptop.created).toBe('function')
    })
})