import "./Homepage.css";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";



export default function Homepage() {
  return (
    <>
      <Navbar />
       <Hero /> 
      <main className="homepage-main-section">
       <Categories /> 
       <Products /> 
      </main>
      <Footer />
    </>
  );
}
