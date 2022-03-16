export default function RatingFilter() {
  return (
    <div className="m-md1 m-rl0">
      <h5 className="fw-600">Ratings</h5>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="rating" id="four-star" />
        <label className="input-label2" htmlFor="four-star">
          4 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="rating" id="three-star" />
        <label className="input-label2" htmlFor="three-star">
          3 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="rating" id="two-star" />
        <label className="input-label2" htmlFor="two-star">
          2 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="rating" id="one-star" />
        <label className="input-label2" htmlFor="one-star">
          1 stars and above
        </label>
      </div>
    </div>
  );
}
