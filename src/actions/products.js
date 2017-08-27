import API from "util/ecommerceApi";

export function getProducts() {
	return (dispatch) => {
		dispatch({ type: "LOADING_PRODUCTS" });
		API.get("/products").then((res) => {
			if (res.data) {
				dispatch({
					type: "GET_ALL_PRODUCTS",
					products: res.data.products,
				});
			}
			else {
				dispatch({
					type: "PRODUCTS_CANT_LOAD",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "	PRODUCTS_CANT_LOAD",
				error: "Something Failed",
			});
		});
	};
}


export function getSingleProduct(productId) {
	return (dispatch) => {
		dispatch({ type: "LOADING_SELECTED_PRODUCT" });
		API.get(`/products/${productId}`).then((res) => {
			console.log(res.data.product);
			if (res.data) {
				dispatch({
					type: "SELECTED_PRODUCT_LOAD_SUCCESS",
					product: res.data.product,
					productId: res.data.product.id,
				});
			}
			else {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Product Not Found!",
				});
			}
		})
			.catch((err) => {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Something Went Wrong!",
				});
			});
	};
}
