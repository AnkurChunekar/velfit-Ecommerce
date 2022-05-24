import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProductsService } from "../../../../services";
import {
  kettlebellPI,
  bcaaPI,
  onPI,
  latPulldownPI,
} from "../../../../images/index";
import "./Products.css";

export function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getAllProductsService(setProductData);
  }, []);

  return (
    <section>
      <h2 className="title">Our Products</h2>
      <div className="grid-container home-products">
        {productData.length > 0
          ? productData
              .filter((item) => item.isTrending)
              .map((item) => (
                <Link key={item._id} to={`/products/${item._id}`}>
                  <article className="card">
                    <div className="card-image">
                      <img src={item.image} alt="product image" />
                    </div>
                    <div className="card-body">
                      <div className="card-text-content m-xs">
                        <p className="card-title">{item.title}</p>
                        <p className="price fw-600 p-xxs p-rl0">
                          ₹ {item.price}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
          : null}
      </div>
    </section>
  );
}
