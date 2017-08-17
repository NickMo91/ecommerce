const INITIAL_STATE = {
	addedProducts: [],
	priceTotal: 0,
};

export default function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADDED_PRODUCT":
		return {
			...state,
			addedProducts: [
				...state.addedProducts,
				{
					product: action.product,
					price: action.price,
				},
			],
			priceTotal: action.price,

		};


	case "REMOVED_PRODUCT":
		return {
			...state,
			addedProducts: [
				...state.addedProducts, {
					product:  action.product,
					price:  action.price,
				},
			],
		};
	default:
		return state;
	}
}
