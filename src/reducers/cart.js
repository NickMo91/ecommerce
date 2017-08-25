const INITIAL_STATE = {
	cart: [],
	addedProducts: 0,
};

export default function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_PRODUCT":
		return {
			cart: [...state.cart,
				action.product],
			addedProducts: state.addedProducts + 1,
		};

	case "ERROR_ADD":
		return {
			...state,
			error: action.error,
		};

	// case "REMOVE_PRODUCT":
	// 	return {
	// 		cart: [...state.cart,
	// 			action.product],
	// 		addedProducts: state.addedProducts - 1,
	// 	};


	default:
		return state;
	}
}
