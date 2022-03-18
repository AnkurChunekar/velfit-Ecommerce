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

export { sortData, filterProductsUptoPriceRange }
