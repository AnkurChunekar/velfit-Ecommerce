import "./Wishlist.css";
import { dumbellPI } from "../../images";
import { Card, Navbar } from "../../components";

export default function Wishlist() {
  return (
      <>
      <Navbar />
    <section className="wishlist-page">
      <header className="title center-align-text m-lg">
        <div className="fs-2">
          <i className="fa-regular fa-heart" />
        </div>
        <h1 className="fw-600 fs-2">My wishlist</h1>
      </header>

      <div className="products-grid">
        <Card className={"card-w-dismiss"} cardImage={dumbellPI} />
        <Card className={"card-w-dismiss"} cardImage={dumbellPI} />
        <Card className={"card-w-dismiss"} cardImage={dumbellPI} />
      </div>
    </section>
    </>
  );
}
