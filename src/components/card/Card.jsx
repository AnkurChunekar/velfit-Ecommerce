import { CardFooter } from "./CardFooter";
import { CardTextContent } from "./CardTextContent";
import { CardIcons } from "./CardIcons";
import { useCart, useWishlist } from "../../context";
import "./Card.css";

function CardHeader({ cardImage }) {
  return (
    <header className="card-image">
      <img src={cardImage} alt="product image" />
    </header>
  );
}

export default function Card({
  product,
  className,
  cardImage,
  isFastDelivered,
  title,
  description,
  price,
  ratingValue,
  quantity,
}) {

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const inCart =
    cart.findIndex((item) => item._id === product._id) === -1 ? false : true;

  const inWishlist =
    wishlist.findIndex((item) => item._id === product._id) === -1
      ? false
      : true;

  return (
    <>
      <div className={`card ${className}`}>
        <CardHeader cardImage={cardImage} />

        <section className="card-body">
          <CardIcons
            isFastDelivered={isFastDelivered}
            className={className}
            product={product}
            inWishlist={inWishlist}
          />

          <div className="card-overlay">Out of Stock</div>

          <CardTextContent
            title={title}
            description={description}
            price={price}
            ratingValue={ratingValue}
            product={product}
            quantity={quantity}
          />

          <CardFooter
            product={product}
            inCart={inCart}
            inWishlist={inWishlist}
            className={className}
          />
        </section>
      </div>
    </>
  );
}

/* 

                    inCart={
                      cart.findIndex((item) => item._id === product._id) === -1
                        ? false
                        : true
                    }
                    inWishlist={
                      wishlist.findIndex((item) => item._id === product._id) === -1
                        ? false
                        : true
                    }


  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();





*/
