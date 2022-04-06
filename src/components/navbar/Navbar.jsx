import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useCart, useWishlist, useFilter } from "../../context/index";
import { useState } from "react";

export default function Navbar() {
  const [isHamMenuVisible, setIsHamMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { pathname } = useLocation();

  const {
    authState: { user },
  } = useAuth();

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

const { filterDispatch } = useFilter();

  const handleHamMenuToggleClick = () => {
    setIsHamMenuVisible((pv) => !pv);
  };

  const searchToggleClick = () => {
    setSearchVisible(prevVisibility => !prevVisibility);
  };

  const handleUserSearch = () => {
    searchToggleClick();
    filterDispatch({type: "RESET"});
    filterDispatch({type: "SEARCH_PRODUCT", payload: {searchValue: searchInput}});
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
          className={`navigation-ham-menu ${isHamMenuVisible ? "active" : ""}`}
        >
          <button
            id="ham-close-icon"
            className="transparent-bg"
            onClick={handleHamMenuToggleClick}
          >
            <i className="fas fa-times" />
          </button>
          <Link onClick={handleHamMenuToggleClick} to="/">
            Home
          </Link>
          <Link onClick={handleHamMenuToggleClick} to="/products">
            Products
          </Link>
          <Link
            onClick={handleHamMenuToggleClick}
            to={user ? "/wishlist" : "/login"}
          >
            Wishlist
          </Link>
          <Link
            onClick={handleHamMenuToggleClick}
            to={user ? "/cart" : "/login"}
          >
            Orders
          </Link>
          <Link
            onClick={handleHamMenuToggleClick}
            to={user ? "/user" : "/login"}
          >
            {user ? "Account" : "Login"}
          </Link>
        </div>
        <div className="navigation-ham-bg" />
        <div className="nav-actions">
          {pathname === "/products" ? (
            <button onClick={searchToggleClick} className="search-btn">
              <span className="icon-container badge-container">
                <i id="nav-search-icon" className="fas fa-search icon" />
              </span>
            </button>
          ) : null}

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

      {isSearchVisible ? (
        <div id="nav-searchbar" className="input-wrapper active">
          <div className="search-box flex flex-center">
            <button className="search-btn" onClick={handleUserSearch}>
            <i className="fas fa-search" />
            </button>
            <input
              type="text"
              placeholder="Type product name and press Enter key..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => {e.key === "Enter" ? handleUserSearch() : null}}
            />
            <button className="search-btn" onClick={searchToggleClick}>
              <i id="nav-close-icon" className="fas fa-times" />
            </button>
          </div>
          <div onClick={searchToggleClick} id="nav-searchbar-bg" className="searchbar-bg" />
        </div>
      ) : null}

      {/* Search bar ends */}
    </>
  );
}
