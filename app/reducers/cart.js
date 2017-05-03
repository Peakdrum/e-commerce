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
						{	...state.cartItems[payload.productOrder],
							quantity: state.cartItems[payload.productOrder].quantity + 1
						}
					).concat(
						state.cartItems.slice(payload.productOrder + 1, state.cartItems.length)
					)
				})
		case types.MINUS_QUANTITY_FROM_ORDER:
			return state.cartItems[payload.productOrder]?
			(
				state.cartItems[payload.productOrder].quantity !== 0 ?
				{
					...state,
					cartItems:
						state.cartItems.slice(0, payload.productOrder).concat(
							{
								...state.cartItems[payload.productOrder],
								quantity: state.cartItems[payload.productOrder].quantity - 1
							}
						).concat(
							state.cartItems.slice(payload.productOrder + 1, state.cartItems.length)
						)
				} : state
			) : state
		default: 
			return state
	}
}

export default cart