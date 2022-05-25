const sortData = (data, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }

  if (sortBy === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }

  return data;
};

const filterProductsUptoPriceRange = (data, maxPriceRange) => {
  return data.filter((product) => product.price < maxPriceRange);
};

const categorizeData = (data, categories) => {
  if (categories.length < 1) {
    return data;
  }

  return data.filter((p) => categories.includes(p.categoryName));
};

const rateData = (data, rating) => {
  return data.filter((p) => p.rating >= rating);
};

const getOnlyFastDeliveryData = (data, fastDeliveryOnly) => {
  return fastDeliveryOnly ? data.filter((p) => p.isDeliveredFast) : data;
};

const getStockData = (data, removeOutOfStock) => {
  return removeOutOfStock ? data.filter((p) => p.inStock) : data;
};

const getCurrentPageProducts = (data, currentPage) => {
  const productsPerPage = 6;
  if (data.length < productsPerPage) return data;

  const startIndex = currentPage * productsPerPage - productsPerPage;
  let endIndex = startIndex + productsPerPage;

  const result = [];

  for (let i = startIndex; i < endIndex; i++) {
    if (data[i]) {
      result.push(data[i]);
    } else {
      return result;
    }
  }

  return result;
};

const getFilteredProducts = (productData, filterState) => {
  const {
    sortBy,
    maxPriceRange,
    categories,
    rating,
    removeOutOfStock,
    fastDeliveryOnly,
  } = filterState;

  const getCategorizedData = categorizeData(productData, categories);

  const getRatedData = rateData(getCategorizedData, rating);

  const getPriceRangedData = filterProductsUptoPriceRange(
    getRatedData,
    maxPriceRange
  );

  const fastDeliveredData = getOnlyFastDeliveryData(
    getPriceRangedData,
    fastDeliveryOnly
  );
  const stockedData = getStockData(fastDeliveredData, removeOutOfStock);

  const sortedData = sortData(stockedData, sortBy);

  return sortedData;
};

export { getCurrentPageProducts, getFilteredProducts };
