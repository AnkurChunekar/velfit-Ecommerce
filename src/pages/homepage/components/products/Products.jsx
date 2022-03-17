import "./Products.css";
import { dumbbellPI } from "../../../../images/index";

export default function Products(){
    return (
        <section>
        <h2 className="title">Our Products</h2>
        <div className="grid-container">
          <a href="" className="">
            <div className="card">
              <div className="card-image">
                <img
                  src={dumbbellPI}
                  alt="product image"
                />
              </div>
              <section className="card-body">
                <div className="card-text-content m-xs">
                  <p className="card-title">Hex Dumbells</p>
                  <p className="price fw-600 p-xxs p-rl0">₹400</p>
                </div>
              </section>
            </div>
          </a>
          <a href="" className="">
            <div className="card">
              <div className="card-image">
                <img
                  src={dumbbellPI}
                  alt="product image"
                />
              </div>
              <section className="card-body">
                <div className="card-text-content m-xs">
                  <p className="card-title">Hex Dumbells</p>
                  <p className="price fw-600 p-xxs p-rl0">₹400</p>
                </div>
              </section>
            </div>
          </a>
          <a href="" className="">
            <div className="card">
              <div className="card-image">
                <img
                  src={dumbbellPI}
                  alt="product image"
                />
              </div>
              <section className="card-body">
                <div className="card-text-content m-xs">
                  <p className="card-title">Hex Dumbells</p>
                  <p className="price fw-600 p-xxs p-rl0">₹400</p>
                </div>
              </section>
            </div>
          </a>
          <a href="" className="">
            <div className="card">
              <div className="card-image">
                <img
                  src={dumbbellPI}
                  alt="product image"
                />
              </div>
              <section className="card-body">
                <div className="card-text-content m-xs">
                  <p className="card-title">Hex Dumbells</p>
                  <p className="price fw-600 p-xxs p-rl0">₹400</p>
                </div>
              </section>
            </div>
          </a>
        </div>
      </section>
    );
}
