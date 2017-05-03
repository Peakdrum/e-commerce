import * as types from './'


export const addProductToCart = (productId) => ({
	type: types.ADD_PRODUCT_TO_CART,
	payload: {
		productId: productId
	}
})

export const addQuantityToOrder = (productOrder) => ({
	type: types.ADD_QUANTITY_TO_ORDER,
	payload: {
		productOrder: productOrder
	}
})

export const minusQuantityFromOrder = (productOrder) => ({
	type: types.MINUS_QUANTITY_FROM_ORDER,
	payload: {
		productOrder: productOrder
	}
})