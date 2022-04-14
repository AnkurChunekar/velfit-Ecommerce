import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page flex flex-center">
      <div className="error-content flex flex-column flex-center">
        <div className="error-status fw-600">404</div>
        <h1 className="fw-600 fs-4">Page not found.</h1>

        <p className="gray-text fs-5">
          The link you clicked may be broken or the page may have been removed
          or renamed.
        </p>

        <Link to={"/"}>
          <button className="btn btn-primary">
            <i className="fa-solid fa-arrow-left m-xxxs"></i> Go To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
