import { Footer } from "../../components";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import "./Homepage.css";



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
