import { CardFooter } from "./CardFooter";
import { CardTextContent } from "./CardTextContent";
import { CardIcons } from "./CardIcons";
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
  quantity
}) {
  return (
    <>
      <div className={`card ${className}`}>
        <CardHeader cardImage={cardImage} />

        <section className="card-body">
          <CardIcons isFastDelivered={isFastDelivered} className={className} product={product} />

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
