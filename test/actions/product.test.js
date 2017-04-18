import chai from 'chai'
import mocha from 'mocha'
import assert from 'assert'
import { addQuantityToOrder, addProductToCart } from '../../app/actions/product'
import * as types from '../../app/actions'
const expect = chai.expect

describe('Product Action', function() {
  
  describe('addQuantityToOrder', function() {
    it('should return action with order from the cart', function() {
      var actual = addQuantityToOrder(1);
      var expectedResult = {
        type: types.ADD_QUANTITY_TO_ORDER,
        payload: {
          productOrder: 1
        }
      }
      expect(actual).to.deep.equal(expectedResult);
    });
  });

  describe('addProductToCart', function() {
    it('should return action with product Id ', function() {
      var actual = addProductToCart(1);
      var expectedResult = {
        type: types.ADD_PRODUCT_TO_CART,
        payload: {
          productId: 1
        }
      }
      expect(actual).to.deep.equal(expectedResult);
    })
  });

});