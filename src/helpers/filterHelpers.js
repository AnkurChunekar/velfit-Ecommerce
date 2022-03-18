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

const categorizeData = (data, categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories) => {

    let returnValue = [];

    if (!categoryAccessories && !categorySupplements && !categoryEquipments && !categoryWeights) {
        return data;
    }
    
    if(categoryAccessories) {
        returnValue = [...returnValue].concat(data.filter(p => p.categoryName === "accessories"));
    }
    
    if(categorySupplements) {
        returnValue = [...returnValue].concat(data.filter(p => p.categoryName === "supplements"));
    }
    
    if(categoryWeights) {
        returnValue = [...returnValue].concat(data.filter(p => p.categoryName === "weights"));
    }
    
    if(categoryEquipments) {
        returnValue = [...returnValue].concat(data.filter(p => p.categoryName === "equipments"));
    }

    return returnValue;
}



export { sortData, filterProductsUptoPriceRange, categorizeData }
