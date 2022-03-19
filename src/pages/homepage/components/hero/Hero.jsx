import "./Hero.css";
import { heroBanner } from "../../../../images";
import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <header className="hero-section">
        <div className="hero-details">
          <h1>BREAK YOUR LIMITS</h1>
          <p>
            Shop for Quality Fitness Equipments, Supplements and Accessories at
            best prices and discounts.
          </p>
          <Link to="./products" > <button className="btn btn-primary btn-lg">Explore Now</button></Link>
        </div>
        <div className="hero-img-container">
          <img
            className="hero-img img-responsive"
            src={heroBanner}
            alt="Man Performing Deadlift"
          />
        </div>
      </header>
    );
}
