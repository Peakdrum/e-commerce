import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductComponent from '../components/Product'
import { addQuantityToOrder, addProductToCart} from '../actions/product'

class Product extends Component {

	isProductExistInCart(cartItems, productId) {
		Object.keys(cartItems).forEach( key => {
			if( cartItems[key].product === productId){
				return productId
			}
		})
		return false
	}

	render(){
		const productId = 0
		const { addQuantityToOrder, addProductToCart, cart } = this.props

		return <ProductComponent onAdd={()=> addQuantityToOrder(productId)} onMinus={()=>{console.log("MINUS")}}/>
	}
}

const mapStateToProps = (state) => (
	{
		cart: state.cart
	}
)

const mapDispatchToProps = {
		addQuantityToOrder,
		addProductToCart
	}



export default connect(mapStateToProps, mapDispatchToProps)(Product)
