import "./Wishlist.css";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import { useWishlist, useCart } from "../../context";
import { Fragment } from "react";

export default function Wishlist() {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const {
    cartState: { cart },
  } = useCart();

  return (
    <>
      {wishlist.length > 0 ? (
        <section className="wishlist-page">
          <header className="title center-align-text m-lg">
            <div className="fs-2">
              <i className="fa-regular fa-heart" />
            </div>
            <h1 className="fw-600 fs-2">My wishlist</h1>
          </header>

          <div className="products-grid">
            {wishlist.map((product) => (
              <Fragment key={product._id}>
                <Card
                  product={product}
                  cardImage={product.image}
                  className="card-w-dismiss"
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  inWishlist={
                    wishlist.findIndex((item) => item._id === product._id) ===
                    -1
                      ? false
                      : true
                  }
                  inCart={
                    cart.findIndex((item) => item._id === product._id) ===
                    -1
                      ? false
                      : true
                  }
                />
              </Fragment>
            ))}
          </div>
        </section>
      ) : (
        <div className="center-align-text m-xxxl">
          <h1 className="m-lg"> Wishlist is Empty. </h1>
          <Link to="/products">
            <button className="btn btn-primary"> Explore More </button>
          </Link>
        </div>
      )}
    </>
  );
}
