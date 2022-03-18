import { dumbellPI } from "../../images";

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

function CardTextContent({
  title = "Velfit's Dumbbell",
  description = "Best Quality Products",
  price = 100,
  quantity = 1,
  ratingValue = 1,
}) {
  return (
    <div className="card-text-content m-xs">
      <p className="card-title"> {title} </p>
      <p className="subtitle"> {description} </p>
      <p className="price"> ₹ {price} </p>
      <div className="ecom-qty">
        <span className="qty-btn fs-3 p-xxs dec"> - </span>
        <span className="qty-num p-xxs">3</span>
        <span className="qty-btn fs-3 p-xxs inc"> + </span>
      </div>
      <div className={`rating s${ratingValue} fs-6`}>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <span className="rating-info"> {ratingValue} </span>
      </div>
    </div>
  );
}

function CardFooter({ inWishlist }) {
  return (
    <footer className="card-actions m-xs">
      <button className="btn btn-primary">
        {" "}
        {inWishlist ? "Go to Cart" : "Add to Cart"}{" "}
      </button>
    </footer>
  );
}

export default function Card({
  className,
  cardImage,
  isFastDelivered,
  inWishlist,
  title,
  description,
  price,
  ratingValue,
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
          />

          <CardFooter inWishlist={inWishlist} />
        </section>
      </div>
    </>
  );
}
