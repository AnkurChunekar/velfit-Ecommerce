import "./ProductListing.css";
import { dumbbellPI } from "../../images/index";
import { Card } from "../../components/index";
import Filters from "./components/Filters";

export default function ProductListing() {
  return (
    <>
      <main className="product-listing-page">
        <Filters />

        <section className="product-listing p-xs">
          <header className="m-xs m-rl0 center-align-text">
            <div className="fs-">Showing all Products (20)</div>
          </header>

          <div className="products-grid">
            <Card cardImage={dumbbellPI} className={"card-ecom"} />
            <Card cardImage={dumbbellPI} className={"card-ecom"} />
            <Card cardImage={dumbbellPI} className={"card-ecom"} />
            <Card cardImage={dumbbellPI} className={"card-ecom"} />
            <Card cardImage={dumbbellPI} className={"card-ecom"} />
          </div>
        </section>
      </main>
    </>
  );
}
