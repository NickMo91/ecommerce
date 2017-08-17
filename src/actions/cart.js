export function addToCart(product, price) {
	return {
		type: "ADDED_PRODUCT",
		product,
		price,
	};
}

export function removeFromCart(product, price) {
	return {
		type: "REMOVED_PRODUCT",
		product,
		price,
	};
}
