import { CardFooter } from "./CardFooter";
import { CardTextContent } from "./CardTextContent";
import { CardIcons } from "./CardIcons";
import { useCart, useWishlist } from "../../context";
import { isItemInArrayOfObjects } from "../../helpers";
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

  const inCart = isItemInArrayOfObjects(cart, item => item._id === product._id);
  const inWishlist = isItemInArrayOfObjects(wishlist, item => item._id === product._id);

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
