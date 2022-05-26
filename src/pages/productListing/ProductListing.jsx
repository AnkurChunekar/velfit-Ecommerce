import { useEffect, useState, Fragment } from "react";
import { useFilter } from "../../context";
import { Filters } from "./components/Filters";
import { PaginationRow } from "./components/PaginationRow";
import { Card, CircularLoader } from "../../components";
import { getCurrentPageProducts, getFilteredProducts } from "../../helpers";
import { getAllProductsService } from "../../services";
import "./ProductListing.css";

export function ProductListing() {
  const [productData, setProductData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { filterState } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllProductsService(setProductData, setLoader);
  }, []);

  const filteredProducts = getFilteredProducts(productData, filterState);
  const pagedProducts = getCurrentPageProducts(filteredProducts, currentPage);
  const maxNumberOfPages = Math.ceil(filteredProducts.length / 6);

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
                Page {maxNumberOfPages < 1 ? maxNumberOfPages : currentPage} of{" "}
                {maxNumberOfPages} (Showing {pagedProducts.length} of{" "}
                {filteredProducts.length} products)
              </header>
              <div className="products-grid">
                {pagedProducts.length > 0 ? (
                  pagedProducts.map((product) => (
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
                ) : (
                  <p className="center-align-text fw-700 fs-3">
                    No Products Found!
                  </p>
                )}
              </div>
            </>
          )}

          <PaginationRow
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxNumberOfPages={maxNumberOfPages}
          />
        </section>
      </main>
    </>
  );
}
