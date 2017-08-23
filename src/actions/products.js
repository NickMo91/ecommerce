import PRODUCTS from "json/products.json";

export function getProducts() {
	return {
		type: "GET_ALL_PRODUCTS",
		products: PRODUCTS,
	};
}


export function getItem(productId) {
	const products = PRODUCTS;
	return (dispatch) => {
		const foundProduct = products.find((product) => product.id === productId);
		console.log(productId);
		console.log(foundProduct);
		return dispatch({
			type: "GET_ONE_PRODUCT",
			product: foundProduct,
		});
	};
}
