import "./Hero.css";
import bannerImage from "../../../../images/banner-image.webp";


export default function Hero(){
    return (
        <header className="hero-section">
        <div className="hero-details">
          <h1>BREAK YOUR LIMITS</h1>
          <p>
            Shop for Quality Fitness Equipments, Supplements and Accessories at
            best prices and discounts.
          </p>
          <button className="btn btn-primary btn-lg">Explore Now</button>
        </div>
        <div className="hero-img-container">
          <img
            className="hero-img img-responsive"
            src={bannerImage}
            alt=""
          />
        </div>
      </header>
    );
}