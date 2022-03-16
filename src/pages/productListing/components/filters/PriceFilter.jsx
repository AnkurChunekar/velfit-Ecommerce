export default function PriceFilter() {
  return (
    <div className="price m-md1 m-rl0">
      <h5 className="fw-600">Price</h5>
      <div className="flex ai-center jc-space-b m-xxs m-rl0 endpoint-container">
        <span className="endpoint">0</span>
        <span className="endpoint">2500</span>
        <span className="endpoint">5000</span>
      </div>
      <input type="range" min={0} max={100} defaultValue={0} />
      <p className="m-s m-rl0">
        Value: <span id="slider-value" />
      </p>
    </div>
  );
}
