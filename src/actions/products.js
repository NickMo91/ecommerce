import API from "util/ecommerceApi.js";

export function getProducts() {
	return (dispatch) => {
		dispatch({ type: "LOADING_PRODUCTS" });
		API.get("/products").then((res) => {
			console.log(" getAll() action/function res.data: ", res.data);
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
		dispatch({ type: "LOADING-SELECTED_PRODUCT" });
		API.get(`/product/${productId}`).then((res) => {
			console.log("getOne(product) action/function  res.data: ", res.data.product);
			if (res.data) {
				dispatch({
					type: "	SELECTED_PRODUCT_CANT_LOAD_SUCCESS",
					product: res.data.product,
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
