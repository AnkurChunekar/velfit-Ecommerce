import { Link } from "react-router-dom";
import {
  kettlebellPI,
  bcaaPI,
  onPI,
  latPulldownPI,
} from "../../../../images/index";
import "./Products.css";

export function Products() {
  return (
    <section>
      <h2 className="title">Our Products</h2>
      <div className="grid-container">
        <Link to="/products">
          <div className="card">
            <div className="card-image">
              <img src={kettlebellPI} alt="product image" />
            </div>
            <section className="card-body">
              <div className="card-text-content m-xs">
                <p className="card-title">5KG Kettlebell</p>
                <p className="price fw-600 p-xxs p-rl0">₹ 799</p>
              </div>
            </section>
          </div>
        </Link>
        <Link to="/products">
          <div className="card">
            <div className="card-image">
              <img src={bcaaPI} alt="product image" />
            </div>
            <section className="card-body">
              <div className="card-text-content m-xs">
                <p className="card-title">BCAA Energy</p>
                <p className="price fw-600 p-xxs p-rl0">₹ 999</p>
              </div>
            </section>
          </div>
        </Link>
        <Link to="/products">
          <div className="card">
            <div className="card-image">
              <img src={onPI} alt="product image" />
            </div>
            <section className="card-body">
              <div className="card-text-content m-xs">
                <p className="card-title">ON Protien</p>
                <p className="price fw-600 p-xxs p-rl0">₹ 3049</p>
              </div>
            </section>
          </div>
        </Link>
        <Link to="/products">
          <div className="card">
            <div className="card-image">
              <img src={latPulldownPI} alt="product image" />
            </div>
            <section className="card-body">
              <div className="card-text-content m-xs">
                <p className="card-title">Lat Pull Down</p>
                <p className="price fw-600 p-xxs p-rl0">₹ 5449</p>
              </div>
            </section>
          </div>
        </Link>
      </div>
    </section>
  );
}
