const filterReducer = (state, action) => {

    const initialstate = {
        sortBy: null,
        categoryWeights: false,
        categorySupplements: false,
        categoryEquipments: false,
        categoryAccessories: false,
        rating: null,
        includeOutOfStock: true,
        fastDeliveryOnly: false,
        maxPriceRange: 10000
    }

    switch (action.type) {
        case "SORT_BY":
            return { ...state, sortBy: action.payload }
        case "RATING":
            return { ...state, rating: action.payload }
        case "CATEGORY_WEIGHTS":
            return { ...state, categoryWeights: !state.categoryWeights };
        case "CATEGORY_SUPPLEMENTS":
            return { ...state, categorySupplements: !state.categorySupplements };
        case "CATEGORY_EQUIPMENTS":
            return { ...state, categoryEquipments: !state.categoryEquipments };
        case "CATEGORY_ACCESSORIES":
            return { ...state, categoryAccessories: !state.categoryAccessories };
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
