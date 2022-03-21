import { CardFooter } from "./CardFooter";
import { CardTextContent } from "./CardTextContent";
import "./Card.css";

function CardHeader({ cardImage }) {
  return (
    <header className="card-image">
      <img src={cardImage} alt="product image" />
    </header>
  );
}

function CardIcons({ isFastDelivered }) {
  return (
    <>
      <div className="card-dismiss">
        <i className="fa-solid fa-trash fs-5" />
      </div>

      <div className="card-like">
        <i className="fas fa-heart icon" />
      </div>

      {isFastDelivered ? (
        <div className="badge-container tag tag-danger">
          <span className="icon-badge">Super Fast</span>
        </div>
      ) : null}
    </>
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
  quantity
}) {
  return (
    <>
      <div className={`card ${className}`}>
        <CardHeader cardImage={cardImage} />

        <section className="card-body">
          <CardIcons isFastDelivered={isFastDelivered} />

          <div className="card-overlay">Out of Stock</div>

          <CardTextContent
            title={title}
            description={description}
            price={price}
            ratingValue={ratingValue}
            product={product}
            quantity={quantity}
          />

          <CardFooter product={product} />
        </section>
      </div>
    </>
  );
}
