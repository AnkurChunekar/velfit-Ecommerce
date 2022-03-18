import "./ProductListing.css";
import { Card } from "../../components/index";
import Filters from "./components/Filters";
import { Fragment } from "react/cjs/react.production.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../../context";
import {
  sortData,
  filterProductsUptoPriceRange,
  categorizeData,
  rateData,
  getOnlyFastDeliveryData,
  getOutOfStockData,
} from "../../helpers/index";

export default function ProductListing() {
  const [productData, setProductData] = useState([]);
  const { state } = useFilter();
  const {
    sortBy,
    maxPriceRange,
    categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories,
    rating,
    includeOutOfStock,
    fastDeliveryOnly,
  } = state;

  const getProducts = () => {
    try {
      (async () => {
        const response = await axios.get("/api/products");
        setProductData(response.data.products);
      })();
    } catch (error) {
      console.log(error, "error in fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, [productData]);

  const getCategorizedData = categorizeData(
    productData,
    categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories
  );

  const getRatedData = rateData(getCategorizedData, rating);

  const getMaxPriceRangedData = filterProductsUptoPriceRange(
    getRatedData,
    maxPriceRange
  );

  const fastDeliveredData = getOnlyFastDeliveryData(
    getMaxPriceRangedData,
    fastDeliveryOnly
  );
  const OutOfStockData = getOutOfStockData(
    fastDeliveredData,
    includeOutOfStock
  );

  const sortedData = sortData(OutOfStockData, sortBy);

  return (
    <>
      <main className="product-listing-page">
        <Filters />

        <section className="product-listing p-xs">
          <header className="m-xs m-rl0 center-align-text">
            <div className="fs-">
              Showing all Products ({sortedData.length})
            </div>
          </header>

          <div className="products-grid">
            {sortedData.map((item) => (
              <Fragment key={item.id}>
                <Card
                  cardImage={item.image}
                  className={"card-ecom card-w-badge"}
                  title={item.title}
                  description={item.description}
                  ratingValue={item.rating}
                  price={item.price}
                  isFastDelivered={item.isDeliveredFast}
                />
              </Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
