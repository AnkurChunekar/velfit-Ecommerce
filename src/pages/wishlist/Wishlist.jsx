import "./Wishlist.css";
import { dumbbellPI } from "../../images";
import { Card } from "../../components";

export default function Wishlist() {
  return (
      <>
    <section className="wishlist-page">
      <header className="title center-align-text m-lg">
        <div className="fs-2">
          <i className="fa-regular fa-heart" />
        </div>
        <h1 className="fw-600 fs-2">My wishlist</h1>
      </header>

      <div className="products-grid">
        <Card className={"card-w-dismiss"} cardImage={dumbbellPI} />
        <Card className={"card-w-dismiss"} cardImage={dumbbellPI} />
        <Card className={"card-w-dismiss"} cardImage={dumbbellPI} />
      </div>
    </section>
    </>
  );
}
