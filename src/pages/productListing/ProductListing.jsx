import "./ProductListing.css";
import { Card } from "../../components/index";
import Filters from "./components/Filters";
import { Fragment } from "react/cjs/react.production.min";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter, useCart } from "../../context";
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
    cartState: { cart },
  } = useCart();

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
  }, []);

  const getCategorizedData = categorizeData(
    productData,
    categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories
  );

  const getRatedData = rateData(getCategorizedData, rating);

  const getPriceRangedData = filterProductsUptoPriceRange(
    getRatedData,
    maxPriceRange
  );

  const fastDeliveredData = getOnlyFastDeliveryData(
    getPriceRangedData,
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
            {sortedData.map((product) => (
              <Fragment key={product._id}>
                <Card
                  product={product}
                  cardImage={product.image}
                  className={`card-ecom card-w-badge ${
                    product.inStock ? "" : "disabled"
                  }`}
                  title={product.title}
                  description={product.description}
                  ratingValue={product.rating}
                  price={product.price}
                  isFastDelivered={product.isDeliveredFast}
                />
              </Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
