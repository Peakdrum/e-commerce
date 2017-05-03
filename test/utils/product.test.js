import chai, {expect} from 'chai'
import mocha from 'mocha'
import assert from 'assert'
import {isProductExistInCart} from '../../app/utils/product'

describe('Product Utils', ()=>{
    describe('isProductExistInCart', ()=> {
        it('should return false when cartItems is Empty', ()=>{
            const cartItems = []
            const productId = 1
            var result = isProductExistInCart(cartItems, productId)
            expect(result).to.be.false
        })

        it('should return Order Number If Product Exist', ()=> {
            const cartItems = [
                {
                    product: 3,
                    quantity: 2
                },
                {
                    product:4,
                    quantity:3
                }
            ]
            const productId = 4
            var result = isProductExistInCart(cartItems, productId)
            expect(result).to.equal('1')
        })

        it('cart item is undefined return false ', ()=> {
            var productId = 0 
            var cartItems = undefined
            var result = isProductExistInCart(cartItems, productId)
            expect(result).to.be.false
        })
    })
})