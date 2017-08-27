import API from "util/ecommerceApi";


export function submitOrder(order) {
	return (dispatch, getStore) => {
		const { cart } = getStore().cart;
		// First check if we have the gif. If we do, serve it right away!
		const productIds = cart.map(function(item) {
			return item.id;
		});
		dispatch({
			type: "SUBMIT_ORDER_START",
		});
		console.log(productIds);
		API.post("/orders", {
			args: {
	 				name: order.name,
	 				address: order.address,
	 				city: order.city,
	 				state: order.state,
				zipcode: order.zipcode,
	 				products: productIds,
			},
		})
			.then((res) => {
				if (res.data) {
					dispatch({
						type: "SUBMIT_ORDER_SUCCESS",
						data: res.data,
						order,
					});
				}
				else {
					dispatch({
						type: "SUBMIT_ORDER_FAILURE",
						error: res.error.message,
					});
				}
			})
			.catch((error) => {
				dispatch({
					type: "SUBMIT_ORDER_FAILURE",
					error: "Something went wrong, please refresh",
				});
			});
	};
}
