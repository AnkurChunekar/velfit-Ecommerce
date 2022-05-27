import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context";
import { Card } from "../../components";
import "./Wishlist.css";

export function Wishlist() {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <>
      {wishlist.length > 0 ? (
        <section className="wishlist-page">
          <header className="title center-align-text m-lg">
            <div className="fs-2">
              <i className="fa-regular fa-heart" />
            </div>
            <h1 className="fw-600 fs-2">My wishlist ({wishlist.length}) </h1>
          </header>

          <div className="products-grid">
            {wishlist.map((product) => (
              <Fragment key={product._id}>
                <Card
                  product={product}
                  cardImage={product.image}
                  className={`card-w-dismiss ${
                    product.inStock ? "" : "disabled"
                  }`}
                  title={product.title}
                  description={product.description}
                  price={product.price}
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
