const sortData = (data, sortBy) => {

    if (sortBy === "HIGH_TO_LOW") {
        return [...data].sort((a, b) => b.price - a.price);
    }

    if (sortBy === "LOW_TO_HIGH") {
        return [...data].sort((a, b) => a.price - b.price);
    }

    return data;
}

const filterProductsUptoPriceRange = (data, maxPriceRange) => {
    return data.filter(product => product.price < maxPriceRange);
}

const categorizeData = (data, categories) => {

    if (categories.length < 1) {
        return data;
    }
    
    return data.filter(p => categories.includes(p.categoryName));
}

const rateData = (data, rating) => {
    return data.filter(p => p.rating >= rating)
}

const getOnlyFastDeliveryData = (data, fastDeliveryOnly) => {
    return fastDeliveryOnly ? data.filter(p => p.isDeliveredFast) : data;
}

const getStockData = (data, removeOutOfStock) => {
    return removeOutOfStock ? data.filter(p => p.inStock) : data;
}

export { sortData, filterProductsUptoPriceRange, categorizeData, rateData, getOnlyFastDeliveryData, getStockData }
