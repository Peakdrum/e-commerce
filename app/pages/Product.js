import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductComponent from '../components/Product'
import { addQuantityToOrder, addProductToCart, minusQuantityFromOrder} from '../actions/product'
import {isProductExistInCart} from '../utils/product'

class Product extends Component {

	render(){
		const productId = 0
		const { addQuantityToOrder, addProductToCart, minusQuantityFromOrder, cart } = this.props
		var productOrder = isProductExistInCart(cart.cartItems, productId )
		return <ProductComponent 
			quantity={cart.cartItems.length > 0 ? cart.cartItems[productOrder].quantity : 0} 
			onAdd={
				()=> productOrder ? 
				addQuantityToOrder(productOrder) : 
				addProductToCart(productId) } 
			onMinus={() => minusQuantityFromOrder(productOrder)}
		/>
	}
}

const mapStateToProps = (state) => (
	{
		cart: state.cart
	}
)

const mapDispatchToProps = {
		addQuantityToOrder,
		addProductToCart,
		minusQuantityFromOrder
	}



export default connect(mapStateToProps, mapDispatchToProps)(Product)
