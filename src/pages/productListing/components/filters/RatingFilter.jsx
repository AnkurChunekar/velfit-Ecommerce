export function RatingFilter({ rating, filterDispatch }) {
  const handleRatingChange = (e) => {
    switch (e.target.id) {
      case "four-star":
        filterDispatch({ type: "RATING", payload: 4 });
        break;
      case "three-star":
        filterDispatch({ type: "RATING", payload: 3 });
        break;
      case "two-star":
        filterDispatch({ type: "RATING", payload: 2 });
        break;
      case "one-star":
        filterDispatch({ type: "RATING", payload: 1 });
        break;
      default:
        filterDispatch({ type: "RATING", type: null });
    }
  };

  return (
    <div className="m-md1 m-rl0">
      <h5 className="fw-600">Ratings</h5>
      <div className="input-wrapper radio m-s m-rl0">
        <input
          type="radio"
          name="rating"
          id="four-star"
          checked={rating === 4}
          onChange={handleRatingChange}
        />
        <label className="input-label2" htmlFor="four-star">
          4 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input
          type="radio"
          name="rating"
          id="three-star"
          checked={rating === 3}
          onChange={handleRatingChange}
        />
        <label className="input-label2" htmlFor="three-star">
          3 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input
          type="radio"
          name="rating"
          id="two-star"
          checked={rating === 2}
          onChange={handleRatingChange}
        />
        <label className="input-label2" htmlFor="two-star">
          2 stars and above
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input
          type="radio"
          name="rating"
          id="one-star"
          checked={rating === 1}
          onChange={handleRatingChange}
        />
        <label className="input-label2" htmlFor="one-star">
          1 stars and above
        </label>
      </div>
    </div>
  );
}
