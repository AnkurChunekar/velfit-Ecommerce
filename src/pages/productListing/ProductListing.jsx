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
  const [loader, setLoader] = useState(true);
  const { state } = useFilter();

  const {
    sortBy,
    maxPriceRange,
    categories,
    rating,
    includeOutOfStock,
    fastDeliveryOnly,
  } = state;

  const getProducts = () => {
    try {
      (async () => {
        const response = await axios.get("/api/products");

        switch (response.status) {
          case 200:
            setProductData(response.data.products);
            setLoader(false);
            break;
          case 500:
            throw new Error("Error while fetching data");
          default:
            throw new Error("Unknown Error Occured!");
        }
      })();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
            {loader ? (
              <h1> Loading.... </h1>
            ) : (
              sortedData.map((product) => (
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
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
