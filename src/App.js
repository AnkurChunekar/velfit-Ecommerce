import "./App.css";
import { Navbar } from "./components";
import { Homepage, ProductListing, Wishlist, CartManagement, Login, Signup, User } from "./pages";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
