import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/index";
import { useState } from "react";

export default function Navbar() {
  const {
    authState: { user },
  } = useAuth();
  const [isHamMenuVisible, setIsHamMenuVisible] = useState(false);
  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const handleHamMenuToggleClick = () => {
    setIsHamMenuVisible((pv) => !pv);
  };

  return (
    <>
      <nav className="navigation">
        <div className="nav-brand">
          <i
            className="fas fa-bars ham-icon"
            id="ham-icon"
            onClick={handleHamMenuToggleClick}
          />
          <Link to="/" className="brand-name">
            Velfit
          </Link>
        </div>
        <div
          className={`navigation-ham-menu ${
            isHamMenuVisible ? "active" : ""
          }`}
        >
          <button
            id="ham-close-icon"
            className="transparent-bg"
            onClick={handleHamMenuToggleClick}
          >
            <i className="fas fa-times" />
          </button>
          <Link onClick={handleHamMenuToggleClick} to="/">Home</Link>
          <Link onClick={handleHamMenuToggleClick} to="/products">Products</Link>
          <Link onClick={handleHamMenuToggleClick} to={user ? "/wishlist" : "/login"}>Wishlist</Link>
          <Link onClick={handleHamMenuToggleClick} to={user ? "/orders" : "/login"}>Orders</Link>
          <Link onClick={handleHamMenuToggleClick} to={user ? "/user" : "/login"}>
            {user ? "Account" : "Login"}
          </Link>
        </div>
        <div className="navigation-ham-bg" />
        <div className="nav-actions">
          <a>
            <span className="icon-container badge-container">
              <i id="nav-search-icon" className="fas fa-search icon" />
            </span>
          </a>

          <Link to={user ? "/user" : "/login"}>
            <span>
              <i className={`fa-solid fa-user-${user ? "check" : "xmark"}`} />
            </span>
          </Link>

          <Link to={user ? "/wishlist" : "/login"}>
            <span className="icon-container badge-container">
              <i className="fas fa-heart icon" />
              {user && wishlist.length > 0 ? (
                <span className="icon-badge"> {wishlist.length} </span>
              ) : null}
            </span>
          </Link>

          <Link to={user ? "/cart" : "/login"}>
            <span className="icon-container badge-container">
              <i className="fas fa-shopping-cart icon" />
              {user && cart.length > 0 ? (
                <span className="icon-badge"> {cart.length} </span>
              ) : null}
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
