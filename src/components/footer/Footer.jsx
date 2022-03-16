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
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul className="list-style-none">
              <li>
                <a href="">Weights</a>
              </li>
              <li>
                <a href="">Equipments</a>
              </li>
              <li>
                <a href="">Accessories</a>
              </li>
              <li>
                <a href="">Supplements</a>
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
              <a href="">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="">
                <i className="fa-brands fa-github" />
              </a>
              <a href="">
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
