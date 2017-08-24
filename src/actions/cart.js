export function addToCart(product) {
	return (dispatch) => {
		if (product) {
			dispatch({
				type: "ADD_PRODUCT",
				product,
			});
		}
		else {
			dispatch({
				type: "ERROR_ADD",
				error: "Couldn't Add Item To The Cart!",
			});
		}
	};
}
