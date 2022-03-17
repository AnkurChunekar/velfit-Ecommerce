export default function getFilteredData({
    data,
    sortBy,
    includeOutOfStock,
    onlyFastDelivery,
    maxRangePrice
  }) {
    let returnValue = [...data];
  
    returnValue = returnValue.filter(
      (item) => parseFloat(item.price) < maxRangePrice
    );
  
    if (!includeOutOfStock) {
      returnValue = returnValue.filter((item) => item.inStock);
    }
    if (onlyFastDelivery) {
      returnValue = returnValue.filter((item) => item.fastDelivery);
    }
  
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return returnValue.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }
  
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return returnValue.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
  
    return returnValue;
  }
