import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div className="nav-brand">
          <i className="fas fa-bars ham-icon" id="ham-icon" />
          <a className="brand-name">Velfit</a>
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
          <a href="">
            <i className="fas fa-user" />
          </a>
          <a href="/pages/wishlist/wishlist.html">
            <span className="icon-container badge-container">
              <i className="fas fa-heart icon" />
              <span className="icon-badge">2</span>
            </span>
          </a>
          <a href="/pages/cart-management/cart-management.html">
            <span className="icon-container badge-container">
              <i className="fas fa-shopping-cart icon" />
              <span className="icon-badge">2</span>
            </span>
          </a>
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
