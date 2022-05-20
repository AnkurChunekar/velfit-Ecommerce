export function CouponModal({
    couponModalToggleClick,
    setSelectedCoupon,
    price,
    selectedCoupon,
  }) {
    return (
      <div className="modal-container coupon-modal active">
        <div className="modal m-md1 p-s">
          <header className="">
            <div className="modal-title fs-4 fw-600">Select Coupon</div>
            <button onClick={couponModalToggleClick} className="btn-unset">
              <i
                id="demo-modal-close-btn"
                className="fas fa-times close-icon fs-4"
              ></i>
            </button>
          </header>
          <section className="modal-body">
            <div className={`radio ${price < 5000 ? "disabled" : ""} `}>
              <input
                onChange={() => setSelectedCoupon(10)}
                checked={selectedCoupon === 10}
                type="radio"
                name="coupon"
                id="coupon-10"
                disabled={price < 5000 ? true : false}
              />
              <label htmlFor="coupon-10">FIT10 - 10% Off above ₹5000.</label>
            </div>
  
            <div className={`radio ${price < 10000 ? "disabled" : ""}`}>
              <input
                onChange={() => setSelectedCoupon(15)}
                checked={selectedCoupon === 15}
                type="radio"
                name="coupon"
                id="coupon-15"
                disabled={price < 10000 ? true : false}
              />
              <label htmlFor="coupon-15">GYM15 - 15% Off above ₹10000.</label>
            </div>
          </section>
        </div>
      </div>
    );
  }
