import { before,describe, it } from 'mocha'

describe('feature', () => {

    before(() => {
        throw new Error('failed')
    })

    it('passes?', () => {})
})
