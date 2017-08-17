export function checkout(product, user) {
	return {
		type: "CHECK_OUT_CART",
		product,
		user,
	};
}
