const filterReducer = (state, action) => {

    const initialstate = {
        sortBy: null,
        rating: null,
        includeOutOfStock: true,
        fastDeliveryOnly: false,
        maxPriceRange: 10000,
        categories: []
    }

    switch (action.type) {
        case "SORT_BY":
            return { ...state, sortBy: action.payload }
        case "RATING":
            return { ...state, rating: action.payload }
        case "CATEGORY_CHANGE":
            if (state.categories.includes(action.payload)) {
                return { ...state, categories: state.categories.filter(c => c !== action.payload) };
            }
            return { ...state, categories: [...state.categories, action.payload] };
        case "PRICE_RANGE":
            return { ...state, maxPriceRange: action.payload }
        case "INCLUDE_OUT_OF_STOCK":
            return { ...state, includeOutOfStock: !state.includeOutOfStock }
        case "FAST_DELIVERY_ONLY":
            return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly }
        case "RESET":
            return initialstate;
        default:
            return state;
    }
}

export { filterReducer };
