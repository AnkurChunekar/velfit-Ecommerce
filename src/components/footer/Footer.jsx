import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="row flex flex-wrap">
            <div className="footer-col">
              <h4>Categories</h4>
              <ul className="list-style-none">
                <li>
                  <Link to="/products">Weights</Link>
                </li>
                <li>
                  <Link to="/products">Equipments</Link>
                </li>
                <li>
                  <Link to="/products">Accessories</Link>
                </li>
                <li>
                  <Link to="/products">Supplements</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Shop</h4>
              <ul className="list-style-none">
                <li>
                  <Link to="/user">Orders</Link>
                </li>
                <li>
                  <Link to="/user">Wishlist</Link>
                </li>
                <li>
                  <Link to="/user">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://twitter.com/ankur_chunekar" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankur-chunekar-8071bb211"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="https://github.com/AnkurChunekar" target="_blank">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://ankurchunekar.hashnode.dev/" target="_blank">
                  <i className="fa-brands fa-hashnode" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
