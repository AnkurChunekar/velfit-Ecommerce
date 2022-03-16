import "./Homepage.css";
import { Footer } from "../../components";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";



export default function Homepage() {
  return (
    <>
       <Hero /> 
      <main className="homepage-main-section">
       <Categories /> 
       <Products /> 
      </main>
      <Footer />
    </>
  );
}
