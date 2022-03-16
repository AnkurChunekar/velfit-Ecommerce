import { dumbellPI } from "../../images";

export default function Card({className, cardImage}) {
    return(
        <>
         <div className={`card ${className}`}>
            <header className="card-image">
              <img src={cardImage} alt="product image" />
            </header>
            <section className="card-body">
              {/* Card icons */}
              <div className="card-dismiss">
                <i className="fa-solid fa-trash fs-5" />
              </div>
              <div className="card-like">
                <i className="fas fa-heart icon" />
              </div>
              <div className="badge-container tag tag-danger">
                <span className="icon-badge">New</span>
              </div>
              <div className="card-overlay">Out of Stock</div>
              {/* Card icons */}
              <div className="card-text-content m-xs">
                <p className="card-title">Sony Camera</p>
                <p className="subtitle">Canon Camera E11, Black 10x zoom.</p>
                <p className="price">₹400</p>
                <div className="ecom-qty">
                  <span className="qty-btn fs-3 p-xxs dec"> - </span>
                  <span className="qty-num p-xxs">3</span>
                  <span className="qty-btn fs-3 p-xxs inc"> + </span>
                </div>
                <div className="rating s4 fs-6">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <span className="rating-info">4</span>
                </div>
              </div>
              {/* buttons */}
              <footer className="card-actions m-xs">
                <button className="btn btn-primary">Buy Now</button>
              </footer>
              {/* buttons */}
            </section>
          </div>
        </>
    );
}