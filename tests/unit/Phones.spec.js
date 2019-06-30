import Phones from '@/components/Phones.vue'

describe('Phones', () => {
    it('has a created hook', () => {
        expect(typeof Phones.created).toBe('function')
    })
})