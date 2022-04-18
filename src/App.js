import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import {
  Homepage,
  ProductListing,
  Wishlist,
  CartManagement,
  Login,
  Signup,
  User,
  ErrorPage,
  SingleProductPage,
} from "./pages";
import { Navbar, RequiresAuth } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={"dark"}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productID" element={<SingleProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<Mockman />} />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <CartManagement />
              </RequiresAuth>
            }
          />
          <Route
            path="/user"
            element={
              <RequiresAuth>
                <User />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
