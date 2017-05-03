export const isProductExistInCart = (cartItems, productId) => {
	var foundedProductId
	cartItems && cartItems.length > 0 ?
	Object.keys(cartItems).forEach( key => {
		if( cartItems[key].product === productId){
			foundedProductId = key
		}
	})
	: foundedProductId = false
	return foundedProductId
}