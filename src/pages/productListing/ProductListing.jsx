import "./ProductListing.css";
import { dumbellPI } from "../../images/index";
import { Card, Navbar } from "../../components/index";

export default function ProductListing() {
  return (
      <>
      <Navbar />
    <main className="product-listing-page">
      <aside className="filters-container p-xs">
        {/* Header starts  */}
        <header className="flex ai-center jc-space-b m-s m-rl0">
          <h3 className="fs-4 fw-600">Filters</h3>
          <button className="btn btn-link">Clear</button>
          <button className="filters-close-btn">
            {" "}
            <i className="fa-solid fa-circle-chevron-up" />{" "}
          </button>
        </header>
        {/* price starts  */}
        <div className="price m-md1 m-rl0">
          <h5 className="fw-600">Price</h5>
          <div className="flex ai-center jc-space-b m-xxs m-rl0 endpoint-container">
            <span className="endpoint">0</span>
            <span className="endpoint">2500</span>
            <span className="endpoint">5000</span>
          </div>
          <input type="range" min={0} max={100} defaultValue={0} />
          <p className="m-s m-rl0">
            Value: <span id="slider-value" />
          </p>
        </div>
        {/* Category starts */}
        <div className="m-md1 m-rl0">
          <h5 className="fw-600">Category</h5>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="mens-app" />
            <label htmlFor="mens-app">Mens Apparel</label>
          </div>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="womens-app" />
            <label htmlFor="womens-app">Womens Apparel</label>
          </div>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="equipments" />
            <label htmlFor="equipments">Gym Equipments</label>
          </div>
        </div>
        {/* Ratings starts  */}
        <div className="m-md1 m-rl0">
          <h5 className="fw-600">Ratings</h5>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="rating" id="four-star" />
            <label className="input-label2" htmlFor="four-star">
              4 stars and above
            </label>
          </div>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="rating" id="three-star" />
            <label className="input-label2" htmlFor="three-star">
              3 stars and above
            </label>
          </div>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="rating" id="two-star" />
            <label className="input-label2" htmlFor="two-star">
              2 stars and above
            </label>
          </div>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="rating" id="one-star" />
            <label className="input-label2" htmlFor="one-star">
              1 stars and above
            </label>
          </div>
        </div>
        {/* Sort By starts */}
        <div className="sort m-md1 m-rl0">
          <h5 className="fw-600">Sort By</h5>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="sort" id="low-high" />
            <label className="input-label2" htmlFor="low-high">
              Price - Low to High
            </label>
          </div>
          <div className="input-wrapper radio m-s m-rl0">
            <input type="radio" name="sort" id="high-low" />
            <label className="input-label2" htmlFor="high-low">
              Price - High to Low
            </label>
          </div>
        </div>
      </aside>

      <section className="product-listing p-xs">
        <header className="m-xs m-rl0 center-align-text">
          <div className="fs-">Showing all Products (20)</div>
        </header>
        {/* grid starts */}
        <div className="products-grid">
          <Card cardImage={dumbellPI} className={"card-ecom"} />
          <Card cardImage={dumbellPI} className={"card-ecom"} />
          <Card cardImage={dumbellPI} className={"card-ecom"} />
          <Card cardImage={dumbellPI} className={"card-ecom"} />
          <Card cardImage={dumbellPI} className={"card-ecom"} />
        </div>
        {/* grid ends */}
      </section>
      {/* New Releases ends */}
    </main>
    </>
  );
}
