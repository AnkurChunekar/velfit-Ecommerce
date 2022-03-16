import "./App.css";
import { Navbar } from "./components";
import { Homepage, ProductListing, Wishlist, CartManagement, Login, Signup } from "./pages/index.js";

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      {/* <CartManagement /> */}
      <Homepage />
      {/* <ProductListing /> */}
      {/* <Wishlist /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
    </>
  );
}

export default App;
