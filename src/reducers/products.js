const INITIAL_STATE = {
	products: [],
	activeProduct: null,
	isLoading: false,
	error: null,
};


export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "LOADING_PRODUCTS":
		return {
			...state,
			isLoading: true,
			products: [],
		};

	case "GET_ALL_PRODUCTS":
		return {
        	...state,
			isLoading: false,
      	products: action.products,
    			};

	case "LOADING_PRODUCTS":
		return {
			...state,
			isLoading: true,
			products: [],
		};

	case "LOADING-SELECTED_PRODUCT":
      	return {
			...state,
			isLoading: true,
			 activeProduct: null,
		};

	case "SELECTED_PRODUCT_LOAD_SUCCESS":
		return {
			...state,
			activeProduct: action.product,
			isLoading: false,
		};



	case "PRODUCTS_CANT_LOAD":
		return {
			...state,
			isLoading: false,
			error: action.error,
		};
	case "SELECTED_PRODUCT_CANT_LOAD":
		return {
			...state,
			isLoading: false,
			error: action.error,
		};
	default:
		return state;
	}
}
