export const isProductExistInCart = (cartItems, productId) => {
		Object.keys(cartItems).forEach( key => {
			if( cartItems[key].product === productId){
				console.log('find product')
				return key
			}
		return false
		})
	}