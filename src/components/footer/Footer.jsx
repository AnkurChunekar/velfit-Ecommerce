import { Link } from "react-router-dom";
import { ProductListing } from "../../pages";
import "./Footer.css";

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="row flex flex-wrap">
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="list-style-none">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Our Services</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul className="list-style-none">
              <li>
                <Link to="/products" element={<ProductListing />}>Weights</Link>
              </li>
              <li>
                <Link to="/products" element={<ProductListing />}>Equipments</Link>
              </li>
              <li>
                <Link to="/products" element={<ProductListing />}>Accessories</Link>
              </li>
              <li>
                <Link to="/products" element={<ProductListing />}>Supplements</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Shop</h4>
            <ul className="list-style-none">
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://twitter.com/ankur_chunekar" target="_blank">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/ankur-chunekar-8071bb211" target="_blank">
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
