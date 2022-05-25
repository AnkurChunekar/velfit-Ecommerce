import { useState, useEffect } from "react";
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
  ProfileTab,
  AddressesTab,
  OrdersTab
} from "./pages";
import { Navbar, RequiresAuth } from "./components";
import { getAllProductsService } from "./services";
import "./App.css";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getAllProductsService(setProductData);
  }, []);

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

      <Navbar productData={productData} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage productData={productData} />} />
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
          >
            <Route index element={<ProfileTab/>} />
            <Route path="profile" element={<ProfileTab/>} />
            <Route path="addresses" element={<AddressesTab />} />
            <Route path="orders" element={<OrdersTab />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
