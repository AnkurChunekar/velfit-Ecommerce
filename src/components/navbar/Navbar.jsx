import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart, useWishlist, useAuth } from "../../context";
import "./Navbar.css";

export function Navbar({ productData }) {
  const [isHamMenuVisible, setIsHamMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { pathname } = useLocation();
  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  const {
    cartState: { cart },
  } = useCart();

  const {
    wishlistState: { wishlist },
  } = useWishlist();

  const handleHamMenuToggleClick = () => {
    setIsHamMenuVisible((prev) => !prev);
  };

  const searchToggleClick = () => {
    setSearchVisible((prev) => !prev);
    setSearchInput("");
  };

  const searchedProducts =
    productData.length > 0
      ? productData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.description.toLowerCase().includes(searchInput.toLowerCase())
        )
      : null;

  return (
    <>
      <nav className="navigation">
        <div className="nav-brand flex ai-center">
          <button className="ham-btn btn-unset">
            <i
              className="fas fa-bars ham-icon"
              id="ham-icon"
              onClick={handleHamMenuToggleClick}
            />
          </button>
          <Link to="/" className="brand-name">
            Velfit
          </Link>
          <Link to="/products" className="m-xs m-tb0 products-link">
            Products
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
          <Link onClick={handleHamMenuToggleClick} to="/wishlist">
            Wishlist
          </Link>
          <Link onClick={handleHamMenuToggleClick} to="/cart">
            Orders
          </Link>
          <Link onClick={handleHamMenuToggleClick} to="/user/profile">
            {token ? "Profile" : "Login"}
          </Link>
        </div>
        <div
          onClick={handleHamMenuToggleClick}
          className={`navigation-ham-bg ${isHamMenuVisible ? "active" : ""}`}
        ></div>
        <div className="nav-actions">
          <button onClick={searchToggleClick} className="search-btn">
            <span className="icon-container badge-container">
              <i id="nav-search-icon" className="fas fa-search icon" />
            </span>
          </button>

          <Link to="/user/profile">
            <span>
              <i className={`fa-solid fa-user-${token ? "check" : "xmark"}`} />
            </span>
          </Link>

          <Link to="/wishlist">
            <span className="icon-container badge-container">
              <i className="fas fa-heart icon" />
              {token && wishlist.length > 0 ? (
                <span className="icon-badge"> {wishlist.length} </span>
              ) : null}
            </span>
          </Link>

          <Link to="/cart">
            <span className="icon-container badge-container">
              <i className="fas fa-shopping-cart icon" />
              {token && cart.length > 0 ? (
                <span className="icon-badge"> {cart.length} </span>
              ) : null}
            </span>
          </Link>
        </div>
      </nav>

      {/* Search bar starts */}
      {isSearchVisible ? (
        <div id="nav-searchbar" className="nav-searchbar input-wrapper active">
          <div className="search-box flex flex-center">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search for any product here..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-btn" onClick={searchToggleClick}>
              <i id="nav-close-icon" className="fas fa-times" />
            </button>

            {/* search Results */}
            {searchInput.trim() !== "" ? (
              <ul className="list list-style-none">
                {searchedProducts.length > 0 ? (
                  searchedProducts.map((item) => (
                    <li key={item._id}>
                      <Link
                        onClick={searchToggleClick}
                        to={`/products/${item._id}`}
                        className="link fw-600"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="p-xs">No Products Found</li>
                )}
              </ul>
            ) : null}
          </div>
          <div
            onClick={searchToggleClick}
            id="nav-searchbar-bg"
            className="searchbar-bg"
          />
        </div>
      ) : null}
    </>
  );
}
