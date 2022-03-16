import "./Categories.css"
import {categorySupplements, categoryAccessories, categoryEquipments, categoryWeights } from "../../../../images/index";

export default function Categories(){
    return (
        <section className="category-section">
          <h2 className="title">Categories</h2>
          <div className="category-container grid-container">
            <a className="category" >
              <img src={categoryWeights} alt="" />
              <div className="category-name">WEIGHTS</div>
            </a>
            <a className="category" >
              <img src={categoryEquipments} alt="" />
              <div className="category-name">EQUIPMENTS</div>
            </a>
            <a className="category" >
              <img src={categoryAccessories} alt="" />
              <div className="category-name">ACCESSORIES</div>
            </a>
            <a className="category" >
              <img src={categorySupplements} alt="" />
              <div className="category-name">SUPPLEMENTS</div>
            </a>
          </div>
        </section>
    );
}