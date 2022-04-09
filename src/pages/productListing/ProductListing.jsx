import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useFilter } from "../../context";
import {
  sortData,
  filterProductsUptoPriceRange,
  categorizeData,
  rateData,
  getOnlyFastDeliveryData,
  getStockData,
  searchData,
} from "../../helpers/index";
import Filters from "./components/Filters";
import { Card, CircularLoader } from "../../components";
import "./ProductListing.css";

export default function ProductListing() {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { filterState, filterDispatch } = useFilter();

  const {
    sortBy,
    maxPriceRange,
    categories,
    rating,
    removeOutOfStock,
    fastDeliveryOnly,
    searchValue,
  } = filterState;

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
      console.error(error);
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
  const stockedData = getStockData(fastDeliveredData, removeOutOfStock);

  const sortedData = sortData(stockedData, sortBy);

  const getSearchedData = searchData(sortedData, searchValue);

  return (
    <>
      <main className="product-listing-page">
        <Filters />

        <section className="product-listing p-xs">
          {loader ? (
            <div className="loader-container flex flex-center">
              <CircularLoader />
            </div>
          ) : (
            <>
              <header className="m-xs m-rl0 center-align-text">
                {searchValue === "" ? (
                  <div className="fs-">
                    Showing all Products ({getSearchedData.length})
                  </div>
                ) : (
                  <div className="flex ai-center jc-space-b p-xs">
                    <p>
                      You Searched: <b> {searchValue} </b>
                    </p>
                    <button onClick={() => {filterDispatch({type:"RESET"})}} className="btn btn-secondary">Clear Search</button>
                  </div>
                )}
              </header>
              <div className="products-grid">
                {getSearchedData.map((product) => (
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
            </>
          )}
        </section>
      </main>
    </>
  );
}
