import * as types from '../actions'
const initialState = {
	cartItems: []
}

function cart( state = initialState, action ) {
	const { type, payload } = action
	switch ( type ) {
		case types.ADD_PRODUCT_TO_CART:
			return ( 
				{ ...state,
					cartItems: [
						...cart,
						{
							product: payload.productId,
							quantity:1
						}
					]
				})
		case types.ADD_QUANTITY_TO_ORDER:
			return ( 
				{ ...state,
					cartItems:
						state.cartItems.slice(0, payload.productOrder ).concat(
						{
							product: state.cartItems[payload.productOrder].product,
							quantity: state.cartItems[payload.productOrder].quantity + 1
						}
					).concat(
						state.cartItems.slice(payload.productOrder + 1, state.cartItems.length)
					)
				})
		default: 
			return state
	}
}

export default cart