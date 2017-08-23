const INITIAL_STATE = {
	products: [],
	activeProduct: null,
	isLoading: false,
	error: null,
};


export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "GET_ALL_PRODUCTS":
		return {
        	...state,
      	products: action.products,
    			};
	case "GET_ONE_PRODUCT":
      	return {
			...state,
			 activeProduct: action.product,
		};
	default:
		return state;
	}
}
