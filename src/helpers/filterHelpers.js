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

const searchData = (data, searchValue) => {
  if (searchValue) {
    return data.filter((p) =>
      p.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }

  return data;
};

const getCurrentPageProducts = (data, currentPage, searchValue) => {
  const productsPerPage = 6;
  if (data.length < productsPerPage || searchValue.trim() !== "") return data;

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


export {
  sortData,
  filterProductsUptoPriceRange,
  categorizeData,
  rateData,
  getOnlyFastDeliveryData,
  getStockData,
  searchData,
  getCurrentPageProducts,
};
