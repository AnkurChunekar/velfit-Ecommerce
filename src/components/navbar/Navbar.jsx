import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../context/index";


export default function Navbar() {
  const { authState } = useAuth();
  const { cartState: {cart} } = useCart()
  return (
    <>
      <nav className="navigation">
        <div className="nav-brand">
          <i className="fas fa-bars ham-icon" id="ham-icon" />
          <Link to="/" className="brand-name">
            Velfit
          </Link>
        </div>
        <div className="navigation-ham-menu" id="navigation-ham-menu">
          <i className="fas fa-times" id="ham-close-icon" />
          <a href="/index.html">Home</a>
          <a href="/pages/products-page/products.html">Products</a>
          <a href="/pages/wishlist/wishlist.html">Wishlist</a>
          <a href="/pages/cart-management/cart-management.html">Orders</a>
          <a href="/pages/login/login.html">Login</a>
        </div>
        <div className="navigation-ham-bg" />
        <div className="nav-actions">
          <a>
            <span className="icon-container badge-container">
              <i id="nav-search-icon" className="fas fa-search icon" />
            </span>
          </a>

          <Link to={authState.user ? "/user" : "/login"}>
            <span>
              <i
                className={`fa-solid fa-user-${
                  authState.user ? "check" : "xmark"
                }`}
              />
            </span>
          </Link>

          <Link to={authState.user ? "/wishlist" : "/login"}>
            <span className="icon-container badge-container">
              <i className="fas fa-heart icon" />
            </span>
          </Link>

          <Link to={authState.user ? "/cart" : "/login"}>
            <span className="icon-container badge-container">
              <i className="fas fa-shopping-cart icon" />
              {authState.user && cart.length > 0 ? <span className="icon-badge"> {cart.length} </span> : null}
            </span>
          </Link>
          
        </div>
      </nav>
      {/* Search bar starts */}
      <div id="nav-searchbar" className="input-wrapper">
        <div className="search-box flex flex-center">
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="search for products, brands and more..."
          />
          <i id="nav-close-icon" className="fas fa-times" />
        </div>
        <div id="nav-searchbar-bg" className="searchbar-bg" />
      </div>
      {/* Search bar ends */}
    </>
  );
}
