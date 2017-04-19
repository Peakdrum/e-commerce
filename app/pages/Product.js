import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductComponent from '../components/Product'
import { addQuantityToOrder, addProductToCart} from '../actions/product'
import isProductExistInCart from '../utils/product'

class Product extends Component {

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
