import chai from 'chai'
import mocha from 'mocha'
import assert from 'assert'
import * as types from '../../app/actions'
import cart from '../../app/reducers/cart'
const expect = chai.expect

describe('Product Reducers', function() {
  
  describe('add product to cart', function() {
    it('assert equal', function() {
			const state = Object.freeze({
				cartItems: []
			})
			var action = {
				type: types.ADD_PRODUCT_TO_CART,
				payload: {
					productId: 1
				}
			}
			var nextState = cart(state, action) 
			var expectedNextState = {
				cartItems: [
					{
						product: 1,
						quantity:1
					}
				]
			}
      expect(nextState).to.deep.equal(expectedNextState);
			expect(state).to.be.frozen
    });
  });

	describe('add quantity to order', function() {
		it('assert quantity to an array order', function() {
			var state = Object.freeze({
				cartItems: [
					{
						product: 1,
						quantity: 1
					},
					{
						product: 2,
						quantity: 3
					}
				]
			})
			var action = {
				type: types.ADD_QUANTITY_TO_ORDER,
				payload: {
					productOrder : 0 
				}
			}
			var nextState = cart(state, action) 
			var expectedNextState = {
				cartItems: [
					{
						product:1,
						quantity:2
					},
					{
						product:2,
						quantity:3
					}
				]
			}
			expect(nextState.cartItems[0].product).to.equal(1)
			expect(nextState).to.deep.equal(expectedNextState)
			expect(state).to.be.frozen
		})
	})

	describe('minus quantity from order', ()=>{
		it('subtract order when the product not exist in cart', ()=>{
			const state = Object.freeze({
				cartItems:[]
			})
			const action = {
				type : types.MINUS_QUANTITY_FROM_ORDER,
				payload : {
					productOrder : 0
				}
			}
			var nextState = cart(state, action) 
			expect(nextState).to.deep.equal(state)
		})

		it('substract order when the product order exist', ()=>{
			const state = Object.freeze({
				cartItems: [
					{
						product: 3,
						quantity: 4
					}
				]
			})
			const action = {
				type: types.MINUS_QUANTITY_FROM_ORDER,
				payload: {
					productOrder: 0
				}
			}
			var nextState = cart(state, action)
			const expectedNextState = {
				cartItems: [
					{
						product: 3,
						quantity: 3
					}
				]
			}
			expect(nextState).to.deep.equal(expectedNextState)
		})

		it('substract from existing order with zero quantity no state change', ()=>{
			const state = {
				cartItems : [
					{
						product: 3,
						quantity: 0
					}
				]
			}
			const action = {
				type: types.MINUS_QUANTITY_FROM_ORDER,
				payload: {
					productOrder: 0
				}
			}

			var nextState = cart(state, action)
			expect(nextState).to.equal(state)
		})
	})


});